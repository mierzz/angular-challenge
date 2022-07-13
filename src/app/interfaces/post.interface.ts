/**
 * Interface for an Instagram post
 */
export interface Post {
  _id: string;
  user: {
    username: string;
    counts: {
      followedBy: number;
    };
    profilePicUrl: string;
  };
  counts: {
    likes: number;
    comments: number;
  };
  postedAt: string;
  kind: string;
  shortcode: string;
  caption: string;
}
