import { Container, Stack, Typography } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';

import { CustomDrawer } from '../components';
import React from 'react';
import { userSelector } from '../states/userStates';

export default function EditData() {
  // const [user, setUser] = useRecoilState(userStates);
  const user = useRecoilValue(userSelector);

  return (
    <Container>
      <Stack spacing={2}>
        <Typography>
          소득공제를 잘 받고 있는지 궁금한 항목의 ‘2020’년도 정보를 꼼꼼하게
          입력해주세요
        </Typography>
        <Typography>
          소득 없는 가족이 아픈 경우 나이를 불문하고 정보 입력!
        </Typography>
        <Typography>이미 공제 받은 가족이 아픈 경우 지병명 입력!</Typography>

        <CustomDrawer
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222428819955"
          title="전세자금대출"
          titleDesc="▶ 전용 85㎡ 이하 전세 대출 보유 근로자만 입력해주세요"
          collectionName="item"
          fieldsName="i1"
          user={user}
        />
        <CustomDrawer
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222428825519"
          title="주택담보대출"
          titleDesc="▶ 2015년 이후 취득 및 취득일 기준 기준시가 5억이하  주택의 대출 보유 근로자만 입력해 주세요"
          collectionName="item"
          fieldsName="i2"
          user={user}
        />
        <CustomDrawer
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222436015492"
          title="주택청약종합저축"
          // titleDesc="▶ 2015년 이후 취득 및 취득일 기준 기준시가 5억이하  주택의 대출 보유 근로자만 입력해 주세요"
          collectionName="item"
          fieldsName="i3"
          user={user}
        />
        <CustomDrawer
          infoTop="[2020년도 사용 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222444942623"
          title="신용카드"
          titleDesc="▶ 소득별 공제 한도가 남아 있으면 입력해주세요"
          collectionName="item"
          fieldsName="i4"
          user={user}
        />
        <CustomDrawer
          infoTop="[2020년도 의료비 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222453330124"
          title="의료비"
          titleDesc="▶ 기본 공제 점검시 이미 입력한 의료비는 제외하고 입력해 주세요"
          collectionName="item"
          fieldsName="i5"
          user={user}
        />
        <CustomDrawer
          infoTop="[2020년도 교육비 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222460762838"
          title="교육비"
          titleDesc="▶ 공제 신청하지 않은 교육비를 입력해 주세요(나이 제한 없음)"
          collectionName="item"
          fieldsName="i6"
          user={user}
        />
        <CustomDrawer
          infoTop="[2020년도 기부 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222461043365"
          title="기부금"
          titleDesc="▶ 공제 신청하지 않은 기부금을 입력해 주세요(나이 제한 없음)"
          collectionName="item"
          fieldsName="i7"
          user={user}
        />
        <CustomDrawer
          infoTop="[해당되는 체크박스 선택 및 2020년 정보를 입력해 주세요]"
          tooltipLink="https://blog.naver.com/soleonetech/222453199507"
          title="월세액"
          // titleDesc="▶ 공제 신청하지 않은 기부금을 입력해 주세요(나이 제한 없음)"
          collectionName="item"
          fieldsName="i8"
          user={user}
        />
      </Stack>
    </Container>
  );
}
