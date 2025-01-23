import { Text, View, ViewProps } from "react-native";

import SkeletonLoading from "@/components/ui/Skeleton";

export function CardHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
      <View
        style={{
          borderRadius: 8,
          backgroundColor: "#000",
          flexDirection: "row",
          alignItems: "center",

          padding: 4,
          gap: 8,
          aspectRatio: 1,
        }}
      >
        {icon}
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export function Card({
  style,
  title,
  children,
  fillSpace,
  ...props
}: ViewProps & { fillSpace?: boolean; title?: string }) {
  return (
    <View
      style={[!fillSpace && { paddingHorizontal: 16 }, { gap: 8, flex: 1 }]}
    >
      {title && (
        <Text
          style={[
            fillSpace && { paddingHorizontal: 16 },
            {
              fontSize: 24,
              color: "white",
              fontWeight: "500",
            },
          ]}
        >
          {title}
        </Text>
      )}
      <View
        style={[
          {
            padding: 16,
            maxWidth: 608,
            borderCurve: "continuous",
            borderRadius: fillSpace ? 0 : 12,
            gap: 8,
            flexShrink: 0,
            overflow: "hidden",
            backgroundColor: "white",
          },
          // {
          //   backgroundImage: 'radial-gradient(rgb(209, 209, 209) 1px, transparent 0px)',
          //   backgroundPosition: 'fixed 0 0',
          //   backgroundSize: '10px 10px',
          // },
          style,
        ]}
      >
        {/* <View
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundImage:
                'linear-gradient(185deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 300px)',
            },
          ]}
        /> */}
        {children}
      </View>
    </View>
  );
}

export function CardSkeleton() {
  return (
    <Card title="Loading...">
      <SkeletonLoading />
      <SkeletonLoading style={{ width: "75%" }} />
    </Card>
  );
}
