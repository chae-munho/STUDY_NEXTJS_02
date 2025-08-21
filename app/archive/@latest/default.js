
//  /archive/2024를 입력했더니 not found 파일이 뜸 왜냐하면 @latest에도 [year] 폴더를 추가해야 하므로 근데 default.js 파일을 추가하면
// 그러한 문제를 해결할 수 있음 default.js 파일은 어디에든 추가할 수 있음 표시할 기본 풀백 콘텐츠를 정의하도록 허요하는 파일이므로
// 라우트가 현재 로딩된 경로에 대해 더 구체적인 콘텐츠를 가지고 있지 않다면 그럴 경우 page.js를 지우고 default.js만 남겨도 됨

import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news"

export default function LatestNewsPage() {
    const latestNews = getLatestNews();
    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews}></NewsList>
        </>
    )
}