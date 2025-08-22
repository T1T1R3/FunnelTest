import { type FC } from "react";
import { Box } from "@mui/material";
import { ResponsiveFunnel, type FunnelPart } from "@nivo/funnel";

interface FunnelDatum {
  id: string;
  value: number;
  label: string;
}

const value = Math.floor(Math.random() * 3000);

const testFunnel: FunnelDatum[] = [
  { id: "1", value: value * 4, label: "Fez Contato" },
  { id: "2", value: value * 3, label: "Pediu Orçamento" },
  { id: "3", value: value * 2, label: "Orçamento Aprovado" },
  { id: "4", value: value * 0.8, label: "Comprou" },
];

// Type for the custom layer props
type CustomLayerProps = {
  parts: FunnelPart<FunnelDatum>[];
};

// custom layer to render labels above each part
const CustomLayer: FC<CustomLayerProps> = ({ parts }) => (
  <>
    {parts.map((part, index) => (
      <text
        key={index}
        x={part.x}
        y={part.y - 25}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fill: "white", fontSize: 12, fontWeight: 700 }}
      >
        {part.data.label}
      </text>
    ))}
  </>
);

const Funnel: FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: 200,
      height: 400,
    }}
  >
    <Box sx={{ width: { md: "250%", xs: "250%" }, height: "100%" }}>
      <ResponsiveFunnel<FunnelDatum>
        data={testFunnel}
        shapeBlending={0.2}
        spacing={5}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        valueFormat=" >-.4s"
        colors={{ scheme: "purpleRed_green" }}
        borderWidth={20}
        labelColor="white"
        layers={["parts", "labels", CustomLayer]}
      />
    </Box>
  </Box>
);

export default Funnel;
