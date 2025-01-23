import { Application } from 'express';
import messages from "./api/messages/messages.routes";

const modules = [
  { name: "messages", route: messages },
];

export function routes(app: Application): void {
  modules.forEach((module) => {
    app.use(`/api/${module.name}`, module.route);
  });
}
