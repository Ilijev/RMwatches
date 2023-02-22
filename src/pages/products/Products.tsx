import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import { Watch } from "./../../interfaces/interfaces";

type Props = {};

export default function Products({}: Props) {
  const [watches, setWatches] = useState<Watch[]>();
  useEffect(() => {
    fetch("http://localhost:3004/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <div className="container">
      {watches && watches.length && (
        <div className="row py-3">
          {watches.map((watch, index) => {
            return (
              <div key={index} className="col-sm-6 col-md-4 py-2">
                <Card id={watch.id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
