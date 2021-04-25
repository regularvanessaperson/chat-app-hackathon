import { Server } from "socket.io";

// This solution is by rogeriojlle on StackOverflow:
// https://stackoverflow.com/questions/57512366/how-to-use-socket-io-with-next-js-api-routes/62547135#62547135
const ioHandler = (req, res) => {
    // if the socket server hasn't started yet, start it up.
    if (!res.socket.server.io) {
        console.log("First use, starting socket.io");

        // create the websocket server
        const io = new Server(res.socket.server);


        io.on("connection", (socket) => {
            // when a message is submitted, broadcast it.
            socket.on("room", room => {
                console.log(`joined chat room ${room}`)
                //to join a new chat room
                socket.join(room)
            });

            socket.on("message-submitted", ({ message, username, room }) => {
                console.log(`i am submiting ${message} from current room ${room}`)
                // echo the message back to the user
                socket.emit("message", { username, message });
                // broadcast the message to everyone else in the room 
                socket.in(room).emit("message", { username, message });
            });

        });

        // make the socket available externally.
        res.socket.server.io = io;
    } else {
        // don't do anything if the server was already started.
        console.log("Server already started");
    }

    // send back an empty 200
    res.end();
};

export default ioHandler;