import { z } from 'zod';
import { dateSchema } from '../util/sharedSchema';

export const VERSION = '1.0.0';

export const schema = z
  .object({
    badgeId: z.string(),
    name: z.string(),
    displayName: z.string(),
    description: z.string(),
    link: z.string(),
    icon: z.string(),
    badgeColor: z.string(),
    createdAt: dateSchema,
    updatedAt: dateSchema.optional(),

  })
  .strict();

export type Category = z.infer<typeof schema>;

export const examples: Category[] = [
  {
    badgeId: 'B0000000000000001',
    name: 'TFC事實查核培訓認證-2024',
    displayName: '事實查核培訓認證',
    description:
      '簡介\n由台灣事實查核中心(www.tfc-Taiwan.org.tw) 認證，完成特定事實查核與媒體素養培訓(課程連結)，即可在Cofacts平台使用此標章。\n使用標章需主動提出申請，填寫下方資料，台灣事實查核中心審核符合資格，即會授權使用。\m申請資料僅供台灣事實查核中心核對身分，將依循個人資料保護法，不會另作其他用途。',
    link: 'https://tfc-taiwan.org.tw/',
    icon: 'https://tfc-taiwan.org.tw/icon.svg',
    badgeColor: '#68AC7C',
    createdAt: '2024-11-07T10:21:34.450Z',
    updatedAt: '2024-11-07T10:21:34.450Z',
  },
];

export default {
  dynamic: 'strict',
  properties: {
    badgeId: { type: 'text' },
    name: { type: 'text' },
    displayName: { type: 'text'},
    description: { type: 'text'},
    link: { type: 'text'},
    icon: { type: 'text'},
    badgeColor: { type: 'text'},
    createdAt: { type: 'date'},
    updatedAt: { type: 'date'},
  },
};
