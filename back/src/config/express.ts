import express, { Application } from 'express';
import morgan from 'morgan';

export default function configuration(app: Application): void {
  app.use(express.json());
  app.use(morgan('dev'));
}