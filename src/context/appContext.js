import {io} from 'socket.io-client';
import React from 'react'

const SOCKET_URL = "https://backend-chatapp-drkl.onrender.com";

export const socket = io(SOCKET_URL);

export const appContext = React.createContext();
