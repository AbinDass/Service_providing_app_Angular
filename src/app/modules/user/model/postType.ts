export interface Post {
  caption: string;
  image: string[];
  isDeleted?: boolean;
  isLiked?: boolean;
  userId: user;
  likedUsers:string[];
  _id?: string;
}

interface user {
  firstname: string;
  secondname: string;
  profilepicture: string[];
}

export interface CommntState {
    comments:Comments[]
}

export interface Comments {
    content: string;
    UserId:user;
}