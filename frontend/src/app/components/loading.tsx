import LoadingIcon from './loadingIcon'

export default function Loading() {
  return (
    <div className="mt-[100px] flex flex-row items-center justify-center px-2">
      <LoadingIcon />
      <h1 className="text-lg font-bold text-mainOrange-600 md:text-2xl">
        Loading...
      </h1>
    </div>
  )
}
