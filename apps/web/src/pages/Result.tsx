import { Button } from "@openplan-test/ui";
import { usePhotoStore } from "../app/store/photoStore";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const photoInfo = usePhotoStore((s) => s.photoInfo);
  const navigate = useNavigate();
  if (!photoInfo) {
    return (
      <div className="h-full flex flex-col items-center justify-center gap-4">
        <p className="text-gray-600">조회된 사진 정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="relative h-full flex flex-col items-center gap-6">
      <div className="fixed top-0 left-0 w-full h-full scale-115">
        <img
          src={photoInfo.download_url}
          alt={"info-image"}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 blur-[6px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-[#ffffff]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
        <img
          src="/noiseLayer.png"
          alt="noise-layer"
          className="absolute top-0 left-0 w-full h-full rounded object-cover"
        />
      </div>
      <div className="flex-1 relative w-full flex gap-10 items-center justify-center">
        <img
          src={photoInfo.download_url}
          alt={photoInfo.author}
          className="flex-1 w-1/2 rounded-3xl"
        />
        <div className="flex-1 flex flex-col items-center gap-3">
          <div className="flex w-full p-5 rounded-2xl bg-white">
            <div className="flex-1">
              <p>id</p>
              <p className="text-text-primary opacity-50">{photoInfo.id}</p>
            </div>
            <div className="flex-1">
              <p>author</p>
              <p className="text-text-primary opacity-50">{photoInfo.author}</p>
            </div>
          </div>
          <div className="flex w-full p-5 rounded-2xl bg-white">
            <div className="flex-1">
              <p>width</p>
              <p className="text-text-primary opacity-50">{photoInfo.width}</p>
            </div>
            <div className="flex-1">
              <p>height</p>
              <p className="text-text-primary opacity-50">{photoInfo.height}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full p-5 rounded-2xl bg-white">
            <div className="flex-1">
              <p>url</p>
              <a
                href={photoInfo.url}
                target="_blank"
                className="text-text-primary opacity-50 underline"
              >
                {photoInfo.url}
              </a>
            </div>
            <div className="flex-1">
              <p>download_url</p>
              <a
                href={photoInfo.download_url}
                target="_blank"
                className="text-text-primary opacity-50 underline"
              >
                {photoInfo.download_url}
              </a>
            </div>
          </div>
          <Button variant="secondary" size="sm" onClick={() => navigate("/")}>
            <span>이전</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
