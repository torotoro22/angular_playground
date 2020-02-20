export class Post {
  constructor(id: number, title: string, desc: string, author: string, image: string) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.author = author;
    this.image = image;
  }

  id: number;
  title: string;
  desc: string;
  author: string;
  image: string;
}
