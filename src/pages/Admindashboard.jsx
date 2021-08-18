import React from 'react';
import Logo from "../assets/images/Logo.svg";
import HomeUser from "../assets/images/Home_user.svg";
import Search from "../assets/images/Search-icon.svg"

const Admindashboard = ({history}) => {

    const myBg = {
        backgroundColor: "#F4F7FE"
    }

    // const feedBackName = ['David James', 'Tony Stark', 'Greg Andrey', 'Paul Anderson'];
    // const feedbackData = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat'];

    // const feedbackList1 = () => {
    //     for(var i = 0; i < feedBackName.length; i++){
    //         feedbackNameReturn.push(
    //             <h4 className="text-xl text-gray-500 font-bold mr-5">{feedBackName[i]}</h4>
    //         );
    //         return (
    //             <h4 className="text-xl text-gray-500 font-bold">David James</h4>
    //              <p className="text-gray-400 text-justify font-normal">
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
    //              </p>
    //          )
    //     }
    //     return feedbackNameReturn;        
    // };
    
    // const feedbackList2 = () => {
    //     for(let a = 0; a < feedbackData.length; a++){
    //         feedbackCont.push(
    //             <p className="text-gray-400 text-justify font-normal">
    //                 {feedbackData.[a]}
    //             </p>
    //         );
    //     }
    //     return feedbackCont;
    // };

    return(
        <div>
            <div className="w-12 h-full bg-gradient-to-b from-blue-400 to-blue-800 shadow rounded rounded-md">
                <img src={Logo} className="pt-4 px-3 py-5" alt="Feddup Logo" />
            </div>
            <div className="w-3/12 h-auto bg-blue-100 rounded rounded-lg md:w-3/12 md:bg-blue-300 lg:w-3/12 lg:bg-blue-300 sm:w-50 sm:bg-light-blue-500" style={myBg}>
                <form>
                    <div className="space-x-4">
                        <div className="w-4/5 m-3 mx-auto">
                            <div className={['flex border py-2 px-3 rounded rounded-full mb-14 focus:outline-none border-0 bg-white']}>
                                <img src={Search} alt="" className={['mr-5 transform']} />
                                <input type="text" name="" id="" placeholder="Username" className={["bg-transparent w-full focus:outline-none border-0 rounded-lg text-center text-xl"]} />
                            </div>
                        </div>
                    </div>
                    <div className="space-x-4 divide-y divide-light-grey-400">
                        <div className="flow-root border-l-2 focus:border-red-500 border-opacity-75 hover:border-red-500 border-opacity-75">
                            <div class="inline-flex space-x-4">
                                <div class="flex-1">
                                    <img src={HomeUser} className="p-2 ml-5" alt="" />
                                </div>
                                <div class="flex-1 mr-10">
                                    {/* {feedbackList1} */}
                                </div>
                                <div class="flex-1 ml-24">
                                    <p className="ml-9">
                                        Jan 5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-4 divide-y divide-light-grey-400">
                        <div className="flow-root border-l-2 focus:border-blue-500 border-opacity-75 hover:border-blue-500 border-opacity-75">
                            <div class="inline-flex space-x-4">
                                <div class="flex-1">
                                    <img src={HomeUser} className="p-2 ml-5" alt="" />
                                </div>
                                <div class="flex-1">
                                    <h4 className="text-xl text-gray-500 font-bold">David James</h4>
                                    <p className="text-gray-400 text-justify font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                                    </p>
                                </div>
                                <div class="flex-1 ml-24">
                                    <p className="ml-9">
                                        Jan 5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-4 divide-y divide-light-grey-400">
                        <div className="flow-root border-l-2 focus:border-green-400 border-opacity-75 hover:border-green-400 border-opacity-75">
                            <div class="inline-flex space-x-4">
                                <div class="flex-1">
                                    <img src={HomeUser} className="p-2 ml-5" alt="" />
                                </div>
                                <div class="flex-1">
                                    <h4 className="text-xl text-gray-500 font-bold">David James</h4>
                                    <p className="text-gray-400 text-justify font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                                    </p>
                                </div>
                                <div class="flex-1 ml-24">
                                    <p className="ml-9">
                                        Jan 5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-4 divide-y divide-light-grey-400">
                        <div className="flow-root border-l-2 focus:border-pink-400 border-opacity-75 hover:border-pink-400 border-opacity-75">
                            <div class="inline-flex space-x-4">
                                <div class="flex-1">
                                    <img src={HomeUser} className="p-2 ml-5" alt="" />
                                </div>
                                <div class="flex-1">
                                    <h4 className="text-xl text-gray-500 font-bold">David James</h4>
                                    <p className="text-base text-gray-400 text-justify font-normal">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                                    </p>
                                </div>
                                <div class="flex-1 ml-24">
                                    <p className="ml-9">
                                        Jan 5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Admindashboard