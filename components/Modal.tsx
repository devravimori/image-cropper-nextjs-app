import React, { memo} from "react";
import Img from 'next/image'
type IProps = {
    image: {
        original: { src: string },
        crop: string,
    },
    show: Boolean,
    closeModal: () => void
}
const Modal = (props: IProps) => {

    return (
        <>
            {props.show ? (<div className="relative z-[1000]">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">

                        <div className="w-full max-w-4xl transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all">
                            <div className="flex items-center bg-gray-100 ">
                                <div className="pl-4 font-bold text-gray-500">View output</div>
                                <button title="Close the Modal" className="px-5 py-3 text-gray-500 focus:outline-none ml-auto" onClick={props.closeModal}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:space-x-8 p-5 lg:p-6">
                                <div className="w-full lg:w-1/2">
                                    <div className="">
                                        <h3 className="border-b text-xl mt-3 lg:mt-0 lg:text-2xl font-semibold mb-2 lg:mb-5 pb-3 lg:pb-5 text-gray-500">Original Image</h3>
                                        <p>
                                            <img className="rounded" src={props.image.original.src} width="400px" loading='lazy' />
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-2">
                                    <h3 className="border-b text-xl mt-3 lg:mt-0 lg:text-2xl font-semibold mb-2 lg:mb-5 pb-3 lg:pb-5 text-gray-500">Cropped Image</h3>
                                    <p>
                                        <Img className="rounded" src={props.image.crop} width={300} height={300} loading='lazy' />
                                    </p>
                                    <div className="my-5">
                                        <a href={props.image.crop} download='cropped-image.png' className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">Download Image</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            ) : null}
        </>
    );
};

export default memo(Modal);