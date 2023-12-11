import Image from 'next/image'
import { IDigimon } from '../interfaces/Digimon'
import { Reveal } from './utils/reveal'

export interface IAppProps {
  digimonsData?: IDigimon[]
}

export default function Card({ digimonsData }: IAppProps) {
  return (
    <div className="flex w-screen flex-row flex-wrap items-center justify-center gap-10 pt-40 md:pt-8">
      {digimonsData?.map(({ name, id, image, level }) => (
        <Reveal width={'feat-content'} key={id}>
          <div
            className="relative flex h-[460px] w-[240px] transform flex-col items-center justify-between gap-y-2 rounded-2xl bg-cardColor-800 transition-transform delay-150 duration-300 hover:-translate-y-2 hover:cursor-pointer md:w-[300px]"
            style={{ transitionProperty: 'transform' }}
          >
            <div className="relative flex h-2/3 w-full overflow-hidden">
              <Image
                src={image}
                priority={true}
                // placeholder="blur"
                // blurDataURL={image}
                width={500}
                height={500}
                alt="digimon-image"
                className="h-full w-full rounded-md object-cover opacity-90"
              />
            </div>
            <div className="flex h-1/3 w-full flex-col items-center justify-center gap-y-6">
              <h1 className="bold relative z-10 w-full text-center text-xl font-bold text-white md:text-2xl">
                {name}
              </h1>
              <div className="font-regular flex w-2/3 items-center justify-center rounded-lg bg-mainBlue-600 p-1 text-base text-white md:text-lg">
                Level: {level}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
