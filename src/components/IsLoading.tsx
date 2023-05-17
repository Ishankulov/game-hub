import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const IsLoading = () => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden" width="300px">
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default IsLoading;
