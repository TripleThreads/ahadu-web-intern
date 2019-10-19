/**
 * This class is multipart body parser
 * It is separated from other classes for a reuse
 *
 * **/
import {BodyParser, Request, RequestBody} from '@loopback/rest';
import {repository} from '@loopback/repository';

import {ContactRepository, UserRepository} from '../repositories';
import {Contact} from '../models';

import * as multer from 'multer';

const FORM_DATA = 'multipart/form-data';

export class MultipartFormDataBodyParser implements BodyParser {
    name = FORM_DATA;

    constructor(
      @repository(ContactRepository)
      public contactRepository: ContactRepository,
      @repository(UserRepository) protected userRepository: UserRepository,
    ) {
    }

    supports(mediaType: string) {
        return mediaType.startsWith(FORM_DATA);
    }

    async parse(request: Request): Promise<RequestBody> {
        const upload = multer({dest: 'public/uploads/'});
        const id = request.path.split('/')[2];

        return new Promise<RequestBody>((resolve, reject) => {
            upload.any()(request, {} as any, err => {
                if (err) return reject(err);
                resolve({
                    value: {
                        files: request.files,
                        fields: (request as any).fields,
                    },
                });
                const contact = new Contact();
                const contactId = (request as any).body.id;
                try {
                    // copy all attributes
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any

                    Object.keys((request as any).body).forEach((key) => {
                        contact[key] = (request as any).body[key];
                    });

                    delete contact["id"]; // id is autogenerated so no need for that

                    contact['photo'] = (request as any).files[0].filename;

                    if (request.method === 'POST') {
                        return this.userRepository.contacts(id).create(contact);

                    } else if (request.method === 'PATCH') {
                        return this.userRepository.contacts(id).patch(contact, {id: contactId});
                    }
                } catch (e) {

                    return this.userRepository.contacts(id).patch(contact, {id: contactId});
                }
            });
        });
    }
}
