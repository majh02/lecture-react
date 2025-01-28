import React from 'react';
import { ErrorBoundary } from '@sentry/react';
import ProblematicComponent from './ProblematicComponent'

function App() {
  return (
    // ErrorBoundary 컴포넌트 정의
    <ErrorBoundary
      // 에러 발생 시 보여줄 대체 UI
      fallback={({ error }) => (
        <>
          <div className="error-boundary">
            <h1>문제가 발생했습니다.</h1>
            <p>{error.message}</p>
            <button
              className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
            >
              Hello, Tailwind CSS!
            </button>
            <button className="btn btn-green mr-4">Button</button>
            <button className="btn btn-blue">Button</button>
            <button className="btn text-white bg-red-500 hover:bg-red-700">Hover me</button>
          </div>
          <div
            className="group px-6 py-5 max-w-full mx-auto w-72 border border-indigo-500 border-opacity-25 cursor-pointer rounded-lg select-none overflow-hidden space-y-1 hover:bg-white hover:shadow-lg hover:border-transparent"
          >
            <p className="text-indigo-600 group-hover:text-gray-900">New Project</p>
            <p className="text-indigo-500 group-hover:text-gray-500">
              Create a new project from a variety of starting templates.
            </p>
          </div>

          {/* 반응형 -> 화면크기가 커지면 더 어두운 yellow-700으로 변경됨 */}
          <div className="bg-yellow-500 lg:bg-yellow-700 text-white py-2 px-4 font-semibold rounded-lg shadow-md mx-6">Resize Window</div>

          {/* 자식 태그 간격 설정하기 */}
          <div className="flex space-x-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div 
                key={index} 
                className="w-16 h-16 text-white text-2xl font-extrabold rounded-md flex items-center justify-center bg-purple-500"
              >
                {item}
              </div>
            ))}
          </div>

          {/* 자식 태그 순서에 따른 스타일 설정 */}
          <div className='flex space-x-4 py-4'>
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className='w-16 h-16 text-white text-2xl font-semibold 
                          flex items-center justify-center bg-lightGreen
                          rounded-md p-8 transform last:rotate-45'
              >
                {item}
              </div>
            ))}
          </div>
        </>
      )}
      // 에러 캡처 전 실행될 콜백
      beforeCapture={(scope) => {
        scope.setTag('page', 'home');    // 현재 페이지 정보 태그 추가
        scope.setLevel('error');         // 에러 심각도 설정
      }}
    >
      <h1>메인 애플리케이션</h1>
      {/* 에러가 발생할 수 있는 컴포넌트 */}
      <ProblematicComponent />
    </ErrorBoundary>
  );
}

export default App;
