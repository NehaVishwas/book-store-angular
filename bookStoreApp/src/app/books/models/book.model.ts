import { AuthorModel } from "./author.model";
import { PriceModel } from "./price.model";

/* export interface BookModel
{
    id:number,
    title:string,
    totalPages:number,
    author:string,
    price:PriceModel
} */

export class BookModel
{
    public id:number;
    public title:string;
    public totalPages:number;
    public author:string;
    public price:PriceModel;
    public isPublished:boolean;
    public datePublished:Date;
    public authors:AuthorModel[];
}