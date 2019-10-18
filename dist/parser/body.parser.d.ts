/// <reference types="express" />
/**
 * This class is multipart body parser
 * It is separated from other classes to use
 *
 * **/
import { BodyParser, Request, RequestBody } from '@loopback/rest';
import { ContactRepository } from '../repositories';
export declare class MultipartFormDataBodyParser implements BodyParser {
    contactRepository: ContactRepository;
    name: string;
    constructor(contactRepository: ContactRepository);
    supports(mediaType: string): boolean;
    parse(request: Request): Promise<RequestBody>;
}
