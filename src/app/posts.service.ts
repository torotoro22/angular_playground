import {Injectable} from '@angular/core';
import {Post} from './posts/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() {
  }

  getPosts(): Post [] {
    return [
      new Post(0, 'baxmaro', 'blah bkahg sdjkbfjhksdbf',
        'Sulxan', 'https://georgiantravelguide.com/storage/files/bakhmaro-guria-bakhmaro-guria-2.jpg'),
      new Post(1, 'bakuriani', 'blah bkahg sdjkbfjhksdbf',
        'Sulxan', 'https://georgiantravelguide.com/storage/files/bakhmaro-guria-bakhmaro-guria-2.jpg'),
      new Post(2, 'kaxeti', 'blah bkahg sdjkbfjhksdbf',
        'Sulxan', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gremi_Kakheti01.jpg/1200px-Gremi_Kakheti01.jpg'),
      new Post(3, 'gudauri', 'blah bkahg sdjkbfjhksdbf',
        'Sulxan', 'https://sakurageorgia.com/storage/app/uploads/public/5dc/803/eb9/thumb_90335_750_460_0_0_auto.jpg'),

    ];
  }
}
