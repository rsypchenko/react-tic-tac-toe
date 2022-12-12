import { Fireworks } from "@fireworks-js/react";

export const Fire = () => {
  return (
    <div className="h-screen">
      <Fireworks
        options={{
          rocketsPoint: {
            min: 0,
            max: 100,
          },
        }}
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "#fff",
        }}
      />
    </div>
  );
};
