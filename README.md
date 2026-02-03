# OpenPlan Test Project

사진 조회 애플리케이션 입니다. Turborepo를 사용한 모노레포 구조로 구성되어 있으며, React, TypeScript, Vite를 기반으로 개발되었습니다.

## 📋 목차

- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [스크립트](#스크립트)
- [요구사항 구현 현황](#요구사항-구현-현황)
- [배포](#배포)

## 🛠 기술 스택

### Core
- **React** 19.2.1
- **TypeScript** 5.6.2
- **Vite** 6.0.3
- **Turborepo** 2.3.0

### 상태 관리
- **Zustand** 5.0.0 - 전역 상태 관리
- **TanStack Query** 5.62.0 - 서버 상태 관리

### 스타일링
- **Tailwind CSS** 4.0.0
- **CSS Modules**

### 라우팅
- **React Router DOM** 7.0.0

### 문서화
- **Storybook** 10.2.1

### 코드 품질
- **ESLint** 9.15.0
- **Prettier** 3.3.3

## 📁 프로젝트 구조

```
openplan-test/
├── apps/
│   ├── web/              # 메인 웹 애플리케이션
│   │   ├── src/
│   │   │   ├── app/      # 앱 설정 및 레이아웃
│   │   │   ├── entities/ # 비즈니스 엔티티
│   │   │   ├── pages/    # 페이지 컴포넌트
│   │   │   ├── shared/   # 공유 유틸리티 및 훅
│   │   │   └── widgets/  # 위젯 컴포넌트
│   │   └── package.json
│   └── storybook/        # Storybook 워크스페이스
│       ├── stories/      # Story 파일
│       └── package.json
├── packages/
│   └── ui/               # 공유 UI 컴포넌트 라이브러리
│       ├── src/
│       │   └── Button.tsx
│       └── package.json
├── turbo.json            # Turborepo 설정
├── pnpm-workspace.yaml   # pnpm 워크스페이스 설정
├── vercel.json           # Vercel 배포 설정
└── package.json          # 루트 패키지 설정
```

## 🚀 시작하기

### 필수 요구사항

- **Node.js** >= 20.19.1
- **pnpm** 9.14.2

### 설치

1. 저장소 클론
```bash
git clone <repository-url>
cd openplan-test
```

2. 의존성 설치
```bash
pnpm install
```

### 환경 변수 설정

`apps/web` 디렉토리에 `.env` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
VITE_PICSUM_BASE_URL=https://picsum.photos
```

## 💻 구동 방법

### 개발 서버 실행

#### Web 애플리케이션
```bash
# 루트에서 실행
pnpm web

# 또는 web 워크스페이스에서 직접 실행
cd apps/web
pnpm dev
```

`http://localhost:5176`에서 실행됩니다.

#### Storybook
```bash
# 루트에서 실행
pnpm storybook

# 또는 storybook 워크스페이스에서 직접 실행
cd apps/storybook
pnpm dev
```

`http://localhost:6006`에서 실행됩니다.

#### 모든 워크스페이스 동시 실행
```bash
pnpm dev
```

### 빌드

#### 전체 빌드
```bash
pnpm build
```

#### 개별 워크스페이스 빌드
```bash
# UI 패키지 빌드
pnpm build:ui

# Web 애플리케이션 빌드
pnpm build:web

# Storybook 빌드
pnpm build:storybook

# Vercel 배포용 빌드 커맨드드(UI + Web)
pnpm build:vercel
```

### 코드 품질

#### Lint 실행
```bash
# 전체 프로젝트 lint
pnpm lint

# Lint 자동 수정
pnpm lint:fix
```

#### Prettier 포맷팅
```bash
# 포맷팅 실행
pnpm format

# 포맷팅 체크
pnpm format:check
```

## 📝 스크립트

### 루트 레벨 스크립트

| 스크립트 | 설명 |
|---------|------|
| `pnpm dev` | 모든 워크스페이스 개발 서버 실행 |
| `pnpm web` | Web 애플리케이션 개발 서버 실행 |
| `pnpm storybook` | Storybook 개발 서버 실행 |
| `pnpm build` | 모든 워크스페이스 빌드 |
| `pnpm build:ui` | UI 패키지 빌드 |
| `pnpm build:web` | Web 애플리케이션 빌드 |
| `pnpm build:storybook` | Storybook 빌드 |
| `pnpm build:vercel` | Vercel 배포용 빌드 (UI + Web) |
| `pnpm lint` | 전체 프로젝트 lint 검사 |
| `pnpm lint:fix` | Lint 자동 수정 |
| `pnpm format` | Prettier 포맷팅 실행 |
| `pnpm format:check` | Prettier 포맷팅 체크 |

## ✅ 요구사항 구현 현황

### 필수 사항

- [x] **Turborepo 설치 및 설정** - pnpm을 패키지 매니저로 사용
- [x] **워크스페이스 구성** - web, storybook 워크스페이스 생성
- [x] **UI 패키지 버튼 컴포넌트** - `packages/ui`에 Button 컴포넌트 구현
- [x] **Storybook 설정** - 버튼 컴포넌트의 상태별 Story 작성 (Default, Disabled, Loading, Variants, Sizes)
- [x] **버튼 컴포넌트 사용** - web 워크스페이스에서 UI 패키지 버튼 import 및 사용
- [x] **CSS 스타일링** - Tailwind CSS 및 CSS Modules 사용
- [x] **라우팅 설정** - 사진 조회 전: `/`, 조회 후: `/result`
- [x] **API 통신** - `https://picsum.photos/id/0/info` API 사용
- [x] **데이터 전달** - API 응답을 Zustand를 통해 `/result` 페이지로 전달
- [x] **GitHub 저장소** - Public 저장소로 관리
- [x] **Vercel 배포** - web 워크스페이스를 Vercel에 배포

### 추가 사항

- [x] **TanStack Query** - API 데이터 상태 관리에 사용
- [x] **Zustand 전역 상태 관리** - 사진 조회 데이터를 Zustand로 관리
- [x] **데이터 영속성** - 새로고침 시에도 데이터 유지 (localStorage 사용)
- [x] **스로틀링** - 사진 조회 버튼 클릭에 스로틀링 적용 (800ms)
- [x] **로딩 애니메이션** - 스로틀링/로딩 시 버튼에 스피너 애니메이션 표시
- [x] **자동 리다이렉트** - 조회 이력이 있을 시 `/result`로 자동 이동
- [x] **보호된 라우트** - 조회 이력 없이 `/result` 접근 시 1초 후 메인 페이지로 이동
- [x] **배경 이미지** - 조회한 사진을 배경으로 사용 (블러 효과 적용)
- [x] **404 페이지** - 존재하지 않는 라우트 접근 시 404 페이지 노출
- [x] **README 작성** - 프로젝트 문서화
- [x] **ESLint & Prettier** - 코드 품질 관리 도구 설정

## 🎨 추가설명

### 스켈레톤 미구현 이유
해당 프로세스는 home 에서 api를 조회 후, 해당 데이터를 result와 공유합니다. 따라서 스켈레톤이 뜰 시간, 필요가 없다고 판단했습니다.

### 스로틀링
기본적인 스로틀링 이외에도 프로세스가 진행되고 있다면,
해당 프로세스를 반환하도록 설계되었습니다.

### 전역상태관리
해당 사진 데이터는 localstorage 와 zustand로 관리됩니다.
데이터가 없는 화면이 필요하신 경우, localstorage를 비워주세요.

### 자동 리다이렉트 시 Snackbar
ux를 향상시키기 위해, 개인적으로 만들어 배포한 라이브러리를 사용했습니다. 자동 리다이렉트 시에는 알림이 표출됩니다.
해당 알림은 휘발성 flag로 관리되며,
자동 리다이렉트가 일어났을 때만 표출됩니다.
그 이후 새로고침, 재방문 시에는 표출되지 않습니다.


## 🚢 배포

### Vercel 배포 설정

프로젝트는 Vercel을 통해 배포됩니다. `vercel.json` 파일에 다음 설정이 포함되어 있습니다:

- **Output Directory**: `apps/web/dist`
- **SPA 라우팅**: 모든 경로를 `index.html`로 리다이렉트

### 배포 전 확인 사항

1. 환경 변수 설정
   - Vercel 대시보드에서 `VITE_PICSUM_BASE_URL` 환경 변수 설정

2. 빌드 설정
   - Root Directory: `apps/web`
   - Build Command: `pnpm build:vercel` 또는 `cd ../.. && pnpm build:ui && pnpm build:web`
   - Install Command: `pnpm install`
   - Output Directory: `dist`

### 배포 URL

- **GitHub Repository**: [Repository URL]
- **Vercel 배포 URL**: [Deployment URL]

### 프로젝트 아키텍처

프로젝트는 Feature-Sliced Design 원칙을 일부 참고하여 구성되었습니다:

- **app**: 애플리케이션 설정, 레이아웃, 라우팅
- **entities**: 비즈니스 엔티티 (photo 등)
- **pages**: 페이지 레벨 컴포넌트
- **shared**: 공유 유틸리티, 훅, 컴포넌트
- **widgets**: 복합 UI 컴포넌트

## 📄 라이선스

이 프로젝트는 테스트 목적으로 작성되었습니다.
