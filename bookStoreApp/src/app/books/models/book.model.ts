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
    private _author:string;
    public price:PriceModel;
    public isPublished:boolean;
    public datePublished:Date;
    public set author(value:string)
    {
        this._author=value;
    }
    public get author()
    {
        return this._author;
    }
}