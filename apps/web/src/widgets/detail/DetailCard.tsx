import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import { findLargeMediaQuery } from "../../shared/utils/mediaQuery";
import { DetailItem } from "./DetailItem";
import { DetailRow } from "./DetailRow";

interface Props {
  photoInfo: {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  };
}
export default function DetailCard({ photoInfo }: Props) {
  const { mediaQuery } = useMediaQuery();
  const isOverMobile = findLargeMediaQuery("xs", mediaQuery);

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <DetailRow direction={isOverMobile ? "row" : "col"}>
        <DetailItem label="id">{photoInfo.id}</DetailItem>
        <DetailItem label="author">{photoInfo.author}</DetailItem>
      </DetailRow>

      <DetailRow direction={isOverMobile ? "row" : "col"}>
        <DetailItem label="width">{photoInfo.width}</DetailItem>
        <DetailItem label="height">{photoInfo.height}</DetailItem>
      </DetailRow>

      <DetailRow direction="col">
        <DetailItem label="url">
          <a href={photoInfo.url} target="_blank" rel="noreferrer" className="underline">
            {photoInfo.url}
          </a>
        </DetailItem>

        <DetailItem label="download_url">
          <a href={photoInfo.download_url} target="_blank" rel="noreferrer" className="underline">
            {photoInfo.download_url}
          </a>
        </DetailItem>
      </DetailRow>
    </div>
  );
}
