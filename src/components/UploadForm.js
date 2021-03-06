import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  Typography,
  styled,
} from '@mui/material';
import { ExpandMore, UploadFile } from '@mui/icons-material';
import React, { useState } from 'react';
import { snackbarState, userState } from '../states';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';
import { apiRequest } from '../utils';
import axios from 'axios';
import { userSelector } from '../states/userStates';

export default function UploadForm({ disabled, buttonText, saveType }) {
  const setSnackbar = useSetRecoilState(snackbarState);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useRecoilState(userSelector);
  // console.log(user[`${saveType}_uploaded_file`]);
  return (
    <form
      style={{ width: '100%' }}
      action=""
      onSubmit={async e => {
        e.preventDefault();
        if (e.target[0].files.length === 0) {
          setSnackbar({
            open: true,
            message: '선택된 파일이 없습니다.',
            severity: 'error',
          });
          return;
        }
        setLoading(true);

        const formData = new FormData(e.target);

        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/upload_files`,
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          },
        );

        console.log(response.data);
        setUser({
          ...user,
          [`${saveType}_uploaded_file`]: response.data.data,
        });

        setLoading(false);
      }}
    >
      <FormControl fullWidth sx={{ display: 'flex' }}>
        {!disabled && (
          <>
            <input type="file" multiple name="files[]" id="files" />
            <input type="hidden" name="aid" id="aid" value={user.ID} />
            <input type="hidden" name="type" id="type" value={saveType} />
          </>
        )}
        <LoadingButton
          loading={loading}
          disabled={disabled}
          variant="contained"
          size="large"
          startIcon={<UploadFile />}
          loadingPosition="start"
          type="submit"
        >
          {buttonText}
        </LoadingButton>
      </FormControl>

      {user && user[`${saveType}_uploaded_file`].length > 0 ? (
        <Accordion
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            mt: '0 !important',
          }}
        >
          <AccordionSummary
            sx={{
              minHeight: '0 !important',
              '&>div': {
                my: 1,
                justifyContent: 'center !important',
              },
            }}
            expandIcon={<ExpandMore />}
          >
            <Typography align="center">파일 업로드 내역</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {user[`${saveType}_uploaded_file`].map(e => (
              <Typography key={e.ID}>{e.file_real}</Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ) : (
        <Accordion disabled>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>업로드 내역이 없습니다.</Typography>
          </AccordionSummary>
        </Accordion>
      )}
    </form>
  );
}

UploadForm.propTypes = {
  disabled: PropTypes.bool,
  buttonText: PropTypes.string,
  saveType: PropTypes.string,
};
