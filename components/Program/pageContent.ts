'use client';

import { createIdNumber } from '@/utils/clientUtils';

export const programs = [
  {
    type: 'onlineInstruction' as const,
    title: 'Online Driver Education Instruction only',
    price: 40,
    details: [
      '30 hour online program.',
      'Take at your own pace and on your own schedule.',
      'Includes reading information, interactive videos, quzzes, and more.'
    ],
    requirements: ['Available for students that are at least 14 and a half.'],
    standardProgramUrl:
      'https://auth.drivingschoolgm.com/account/studentRegistration?appid=responsible-driving-school&product=2099',
    grantProgramUrl:
      'https://auth.drivingschoolgm.com/account/studentRegistration?appid=responsible-driving-school&product=2100'
  },
  {
    type: 'behindTheWheel' as const,
    title: 'Behind-The-Wheel only',
    price: 380,
    details: ['6 hours of behind-the-wheel.', '6 hours of observation instruction.'],
    requirements: [
      'Available for students that are at least 15.',
      'Completed the 30 hour online course.',
      'Pass DMV knowledge and sign test.',
      'Receive instruction permit (temps) from DMV prior to first BTW.'
    ],
    getStartedUrl: `mailto:seanhasenstein@gmail.com?subject=Behind-the-Wheel%20Inquery%20%5B${createIdNumber()}%5D`
  },
  {
    type: 'both' as const,
    title: 'Online Instruction and Behind-The-Wheel',
    price: 420,
    standardProgramUrl:
      'https://auth.drivingschoolgm.com/account/studentRegistration?appid=responsible-driving-school&product=2099',
    grantProgramUrl:
      'https://auth.drivingschoolgm.com/account/studentRegistration?appid=responsible-driving-school&product=2100'
  }
];
