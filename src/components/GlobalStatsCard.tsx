import React from "react";
import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardStatus from "@material-tailwind/react/CardStatus";


type GlobalStatsCardType = {
  data: string;
  title : string;
};
const GlobalStatsCard = ({ data , title }: GlobalStatsCardType) => {
  return (
    <>
      <Card className="h">
        <CardRow>
          {/* <CardHeader color="lightBlue" size="lg" iconOnly>
                    <Icon name="groups" size="5xl" color="white" />
                </CardHeader> */}

          <CardStatus title={title} amount={data} className="left font-extrabold" />
        </CardRow>

      </Card>


    </>
  );
};

export default GlobalStatsCard;
