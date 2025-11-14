import { Building, Plus } from '../../../assets/image';

const QuickActionsCard = () => {
    return (
        <div className='flex justify-between flex-wrap gap-2'>

            <button
                className="font-custom w-[460px] h-[200px]  rounded-custom bg-whiteColor p-12 shadow-lg
                            flex flex-col items-center justify-center gap-6
                            transition hover:shadow-xl focus:outline-none">

                <div className="flex h-16 w-16 items-center justify-center">
                    <img src={Plus} alt='Plus Icon' />
                </div>

                {/* Text Content */}
                <div className="text-center">
                    <h2 className="font-b6 text-h3 text-blackColor">
                        Add Destination
                    </h2>
                    <p className="mt-2 font-b4 text-text1 text-blackColor">
                        Create New Traveler Destination
                    </p>
                </div>
            </button>

            <button
                className="font-custom w-[460px] h-[200px]  rounded-custom bg-whiteColor p-12 shadow-lg
                            flex flex-col items-center justify-center gap-6
                            transition hover:shadow-xl focus:outline-none">

                <div className="flex h-16 w-16 items-center justify-center">
                    <img src={Building} alt='Building Icon' />
                </div>

                {/* Text Content */}
                <div className="text-center">
                    <h2 className="font-b6 text-h3 text-blackColor">
                        Add Hotel
                    </h2>
                    <p className="mt-2 font-b4 text-text1 text-blackColor">
                        Register new accommodation
                    </p>
                </div>
            </button>

        </div>

    );
};

export default QuickActionsCard;