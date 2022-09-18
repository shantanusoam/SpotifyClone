import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prisma';

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.SHAN_ACESS_TOKEN;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, 'Somuu');
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error('Not real user');
        }
      } catch (error) {
        res.status(401);
        res.json({ error: 'Not Authorizied inside if' });
        return;
      }

      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: 'Not Authorizied outside' });
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, 'Somuu');
  return user;
};
