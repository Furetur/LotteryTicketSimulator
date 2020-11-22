import { createServer, Response } from "miragejs";

let money = 5;

const ticket = [
  1,
  2,
  3,
  4,
  2,
  8,
  777,
  1,
  2,
  3,
  4,
  2,
  8,
  777,
  1,
  2,
  3,
  4,
  2,
  777,
];

const configureServer = () =>
  createServer({
    routes() {
      this.get("/myMoney", () => {
        return new Response(200, {}, money.toString());
      });
      this.post("/buyTicket", () => {
        if (money >= 1) {
          money -= 1;
          return new Response(200, {}, JSON.stringify(ticket));
        } else {
          return new Response(400);
        }
      });
      this.post("/redeemPrize", (_, request) => {
        const prize = parseInt(request.requestBody);
        money += prize;
        return new Response(200, {}, money.toString());
      });
      this.post("/askForMoney", () => {
        money += 10;
        return new Response(200, {}, money.toString());
      });
    },
  });

export default configureServer;
