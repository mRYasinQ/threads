import { supabase } from '../utils/server';

import type { IAddReportBody } from '@/shared/types';

export const addReport = async (data: IAddReportBody): Promise<boolean> => {
    await supabase.from('reports').insert(data);
    return true;
};
