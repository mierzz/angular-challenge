import axios from 'axios';
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Post } from './app/interfaces/post.interface';

dotenv.config();

const app = express();
const port = 8080;
const apiUrl = process.env.ALPHIN_API_URL;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, fr-access-token");
  next();
})

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
        'fr-access-token': String(request.get('fr-access-token')),
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
        'fr-access-token': String(request.get('fr-access-token')),
      },
    }
  );
  return response.json(apiResponse.data.result);
};

app.get('/api/postings', cors({ origin: true }), getPostings);
app.get('/api/postings/:postId', cors({ origin: true }), getPostingsDetails);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
