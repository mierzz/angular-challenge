import axios from 'axios';
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Post } from './app/interfaces/post.interface';

dotenv.config();

const app = express();
const port = 8080;
const apiUrl = process.env.ALPHIN_API_URL;

interface GetPostingResponse {
  status: string;
  result: Post[];
}

interface GetPostingDetailsParams {
  postId: number;
}
interface GetPostingDetailsResponse {
  status: string;
  result: Post;
}

const getPostings = async (request: Request, response: Response) => {
  const method = 'postings';

  const apiResponse = await axios.get<GetPostingResponse>(
    `${apiUrl}/${method}`,
    {
      headers: {
        'fr-access-token': process.env.ALPHIN_API_KEY || '',
      },
    }
  );

  return response.json(apiResponse.data.result);
};

const getPostingsDetails = async (
  request: Request<GetPostingDetailsParams>,
  response: Response
) => {
  const method = `postings/${request.params.postId}`;

  const apiResponse = await axios.get<GetPostingDetailsResponse>(
    `${apiUrl}/${method}`,
    {
      headers: {
        'fr-access-token': process.env.ALPHIN_API_KEY || '',
      },
    }
  );
  console.log(request.params, `${apiUrl}/${method}`, apiResponse.data);
  

  return response.json(apiResponse.data.result);
};

app.get('/api/postings', cors({ origin: true }), getPostings);
app.get('/api/postings/:postId', cors({ origin: true }), getPostingsDetails);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
