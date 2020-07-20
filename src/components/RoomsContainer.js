import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      hello roomcontainer
      <RoomFilter rooms={rooms}></RoomFilter>
      <RoomList rooms={sortedRooms}></RoomList>
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);
