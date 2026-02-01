import { usePhotoStore } from "../app/store/photoStore";

export default function ResultPage() {
  const photoInfo = usePhotoStore((s) => s.photoInfo);

  if (!photoInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 p-8">
        <p className="text-gray-600">조회된 사진 정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center gap-6 p-8">
      <h1 className="text-2xl font-bold text-gray-900">사진 조회 결과</h1>
      <img
        src={photoInfo.download_url}
        alt={photoInfo.author}
        className="w-full rounded object-cover"
      />
    </div>
  );
}
