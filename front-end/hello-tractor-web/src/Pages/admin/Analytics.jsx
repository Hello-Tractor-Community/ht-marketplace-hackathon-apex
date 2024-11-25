import TractorItem from "@/components/TractorItem";
import tractorlist from "@/lib/dummyData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Analytics = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div>
                <div classNameName="px-6 lg:px-12 mb-10">



                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

                        <div className="flex flex-col bg-white border shadow-md rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                            <div className="p-4 md:p-5 flex gap-x-4">
                                <div className="shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-neutral-800">
                                    <svg className="shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>

                                <div className="grow">
                                    <div className="flex items-center gap-x-2">
                                        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                            Total users
                                        </p>
                                        <div className="hs-tooltip">
                                            <div className="hs-tooltip-toggle">
                                                <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-md dark:bg-neutral-700" role="tooltip">
                                                    The number of daily users
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2">
                                        <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                            72,540
                                        </h3>
                                        <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100">
                                            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                                            <span className="inline-block text-xs font-medium">
                                                12.5%
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border shadow-md rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                            <div className="p-4 md:p-5 flex gap-x-4">
                                <div className="shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-neutral-800">
                                    <svg className="shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14" /><path d="M5 2h14" /><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" /><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" /></svg>
                                </div>

                                <div className="grow">
                                    <div className="flex items-center gap-x-2">
                                        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                            Sessions
                                        </p>
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2">
                                        <h3 className="text-xl font-medium text-gray-800 dark:text-neutral-200">
                                            29.4%
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border shadow-md rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                            <div className="p-4 md:p-5 flex gap-x-4">
                                <div className="shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-neutral-800">
                                    <svg className="shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" /><path d="m12 12 4 10 1.7-4.3L22 16Z" /></svg>
                                </div>

                                <div className="grow">
                                    <div className="flex items-center gap-x-2">
                                        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                            Avg. Click Rate
                                        </p>
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2">
                                        <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                                            56.8%
                                        </h3>
                                        <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100">
                                            <svg className="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>
                                            <span className="inline-block text-xs font-medium">
                                                1.7%
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white border shadow-md rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                            <div className="p-4 md:p-5 flex gap-x-4">
                                <div className="shrink-0 flex justify-center items-center size-[46px] bg-gray-100 rounded-lg dark:bg-neutral-800">
                                    <svg className="shrink-0 size-5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" /><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" /><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" /></svg>
                                </div>

                                <div className="grow">
                                    <div className="flex items-center gap-x-2">
                                        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                                            Pageviews
                                        </p>
                                        <div className="hs-tooltip">
                                            <div className="hs-tooltip-toggle">
                                                <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-md dark:bg-neutral-700" role="tooltip">
                                                    The average pageviews
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-1 flex items-center gap-x-2">
                                        <h3 className="text-xl font-medium text-gray-800 dark:text-neutral-200">
                                            92,913
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>



            <div class="grid grid-cols-2 mt-4 mb-4 gap-4 ">
                <div class="flex mt-4 flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 ">
                    <h3 class="text-md  font-medium ">

                        Service / Products
                    </h3>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead className="bg-gray-200 dark:bg-neutral-700">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Name</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Age</th>

                                                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <Link
                                                        className="py-2 px-3 mr-2 font-medium text-emerald-600 hover:text-emerald-500 border border-emerald-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        Approve
                                                    </Link>
                                                    <Link
                                                        v-if="hasSpecificRole('View Customer')"
                                                        className="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 border border-blue-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <Link
                                                        className="py-2 px-3 mr-2 font-medium text-emerald-600 hover:text-emerald-500 border border-emerald-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        Approve
                                                    </Link>
                                                    <Link
                                                        v-if="hasSpecificRole('View Customer')"
                                                        className="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 border border-blue-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <Link
                                                        className="py-2 px-3 mr-2 font-medium text-emerald-600 hover:text-emerald-500 border border-emerald-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        Approve
                                                    </Link>
                                                    <Link
                                                        v-if="hasSpecificRole('View Customer')"
                                                        className="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 border border-blue-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>




                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex mt-4 flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 ">
                    <h3 class="text-md  font-medium ">

                        Service / Products
                    </h3>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                        <thead className="bg-gray-200 dark:bg-neutral-700">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Name</th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Age</th>

                                                <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <Link
                                                        className="py-2 px-3 mr-2 font-medium text-emerald-600 hover:text-emerald-500 border border-emerald-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        Approve
                                                    </Link>
                                                    <Link
                                                        v-if="hasSpecificRole('View Customer')"
                                                        className="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 border border-blue-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <Link
                                                        className="py-2 px-3 mr-2 font-medium text-emerald-600 hover:text-emerald-500 border border-emerald-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        Approve
                                                    </Link>
                                                    <Link
                                                        v-if="hasSpecificRole('View Customer')"
                                                        className="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 border border-blue-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <Link
                                                        className="py-2 px-3 mr-2 font-medium text-emerald-600 hover:text-emerald-500 border border-emerald-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        Approve
                                                    </Link>
                                                    <Link
                                                        v-if="hasSpecificRole('View Customer')"
                                                        className="py-2 px-3 font-medium text-blue-600 hover:text-blue-500 border border-blue-500 duration-150 hover:bg-gray-50 rounded-lg">
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>




                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Analytics;