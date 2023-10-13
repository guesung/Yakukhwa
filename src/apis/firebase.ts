import { deleteData, getData, patchData, postData } from "@/utils/firebaseController";

export const getAnnouncement = async () => await getData('announcement')
export const postAnnouncement = async (key: string, data: any) => await postData('announcement', key, data)
export const deleteAnnouncement = async (key: string) => await deleteData('announcement', key)
export const patchAnnouncement = async (key: string, data: any) => await patchData('announcement', key, data)