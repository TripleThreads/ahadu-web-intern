/**
 * This class is multipart body parser
 * It is separated from other classes to use
 *
 * **/
import {BodyParser, Request, RequestBody} from '@loopback/rest';
import {repository} from '@loopback/repository';

import {ContactRepository} from '../repositories';
import {Contact} from '../models';

import * as multer from 'multer';

const FORM_DATA = 'multipart/form-data';

export class MultipartFormDataBodyParser implements BodyParser {
    name = FORM_DATA;

    constructor(
      @repository(ContactRepository)
      public contactRepository: ContactRepository,
    ) {
    }

    supports(mediaType: string) {
        return mediaType.startsWith(FORM_DATA);
    }

    async parse(request: Request): Promise<RequestBody> {
        const upload = multer({dest: 'public/uploads/'});
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
                try {
                    contact['name'] = (request as any).body.name;
                    contact['phone_number'] = (request as any).body.phone_number;
                    contact['photo'] = (request as any).files[0].filename;

                    if (request.method === 'POST') {

                        return this.contactRepository.save(contact);

                    } else if (request.method === 'PATCH') {
                        const id = request.path.split('/')[2];
                        return this.contactRepository.updateById(id, contact);
                    }
                } catch (e) {
                    const id = request.path.split('/')[2];
                    return this.contactRepository.updateById(id, contact);
                }
            });
        });
    }
}
