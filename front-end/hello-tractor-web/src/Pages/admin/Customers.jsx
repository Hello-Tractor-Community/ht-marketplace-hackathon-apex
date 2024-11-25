import TractorItem from "@/components/TractorItem";
import tractorlist from "@/lib/dummyData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Customers = () => {
    return (
        <div className="px-6 lg:px-12 mb-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-3xl md:text-4xl text-gray-800">Customers</h2>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className="bg-gray-200 dark:bg-neutral-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Age</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Address</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">John Brown</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">New York No. 1 Lake Park</td>
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">New York No. 1 Lake Park</td>
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">New York No. 1 Lake Park</td>
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
    );
};

export default Customers;