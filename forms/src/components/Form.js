import * as React from 'react';
import { useState, useEffect } from "react";
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { LoadingButton } from '@mui/lab';
import {
    Box,
    Avatar,
    Button,
    Item,
    InputLabel,
    Input,
    MenuItem,
    Card,
    CardHeader,
    Container,
    IconButton,
    Grid,
    TextField,
    Stack,
    Link,
    Select,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    FormControl,
    Typography,
    Paper
} from '@mui/material';
import PropTypes from 'prop-types';


export const Forms = (props) => {
    const {
        editData,
        isEditEnabled,
        submit
    } = props;
console.log(isEditEnabled)
    const [open, setOpen] = React.useState(false);
    const [editEnabled, setEditEnabled] = useState(false);
    const [initialData, setInitialData] = useState({
        package_name: '',
        primary_product: '',
        min_quantity: '',
        max_quantity: ''
    });
    
    useEffect(() => {
        if(editData) {
            setInitialData(editData)
        }
    }, [editData])
    

    useEffect(() => {
        setEditEnabled(!isEditEnabled);
    }, [editEnabled]);


    const validationSchema = Yup.object({
        package_name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Formik
            initialValues={initialData}
            enableReinitialize
            // validationSchema={validationSchema}
            onSubmit={submit}
        >
            {
                ({
                    values,
                    handleReset,
                    handleSubmit,
                    errors
                }) => (
                    <Form className="form-container">
                        <Container maxWidth="lg">
                            <Stack
                                direction="row-reverse"
                                justifyContent="space-between"
                                alignItems="right">
                                {
                                    (editEnabled && !isEditEnabled) ?
                                        <Stack
                                            direction="row"
                                            spacing={2}>
                                            <LoadingButton
                                                type="submit"
                                                size="small"
                                                loadingPosition="end"
                                                endIcon={<SaveOutlinedIcon />}
                                                variant="contained"
                                            >Save</LoadingButton>
                                            <Button
                                                size="small"
                                                color="primary"
                                                type="button"
                                                onClick={handleClose}
                                            >Cancel</Button>
                                        </Stack> :
                                        <Stack>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="primary"
                                                type="button"
                                                endIcon={<EditOutlinedIcon />}
                                                onClick={() => setEditEnabled(true)}
                                            >Edit</Button>
                                        </Stack>

                                }
                            </Stack>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputLabel id="name">Package name</InputLabel>
                                    {
                                        editEnabled ?
                                            <Field
                                                as={TextField}
                                                size="small"
                                                name="package_name"
                                                fullWidth
                                                variant="outlined"
                                            /> : <Typography variant="body1">{values.package_name || '-'}</Typography>

                                    }
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputLabel id="name">Primary Product item</InputLabel>
                                    {
                                        editEnabled ?
                                            <Field
                                                as={Select}
                                                fullWidth
                                                size="small"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="primary_product"
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Field> : <Typography variant="body1">{values.primary_product || '-'}</Typography>
                                    }
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <InputLabel id="name">Product items allowed</InputLabel>
                                    {
                                        editEnabled ?
                                            <Field
                                                as={TextField}
                                                size="small"
                                                name="min_quantity"
                                                fullWidth
                                                placeholder="Min Quantity"
                                                variant="outlined"
                                            /> : <Typography variant="body1">{values.min_quantity || '-'}</Typography>
                                    }
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <InputLabel id="name">Max Quantity</InputLabel>
                                    {
                                        editEnabled ?
                                            <Field
                                                as={TextField}
                                                size="small"
                                                name="max_quantity"
                                                placeholder="Max Quantity"
                                                fullWidth
                                                variant="outlined"
                                            /> : <Typography variant="body1">{values.max_quantity || '-'}</Typography>
                                    }
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <InputLabel id="name">Price inclusive upto product quantity</InputLabel>
                                    {
                                        editEnabled ?
                                            <Field
                                                as={TextField}
                                                size="small"
                                                name="price_inclusive"
                                                placeholder="Price inclusive upto product quantity"
                                                fullWidth
                                                variant="outlined"
                                            /> : <Typography variant="body1">{values.price_inclusive || '-'}</Typography>
                                    }
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                    <InputLabel id="name">Search choices of product items</InputLabel>
                                    {
                                        editEnabled ?
                                            <Field
                                                as={TextField}
                                                size="small"
                                                name="available_products"
                                                fullWidth
                                                variant="outlined"
                                                placeholder="Search Available Products"
                                            /> : <Typography variant="body1">{values.available_products || '-'}</Typography>

                                    }
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6}>
                                    <InputLabel id="name">Selected items</InputLabel>
                                    {
                                        editEnabled ?
                                            <Field
                                                as={TextField}
                                                size="small"
                                                name="selected_products"
                                                fullWidth
                                                variant="outlined"
                                                placeholder="Search Selected Products"
                                            /> : <Typography variant="body1">{values.selected_products || '-'}</Typography>

                                    }
                                </Grid>


                                <Grid item xs={12} sm={12} md={12} lg={12}>

                                </Grid>
                            </Grid>
                        </Container>
                    </Form>
                )
            }
        </Formik >

    );
}

Forms.propTypes = {
    editData: PropTypes.string,
    isEditEnabled: PropTypes.bool,
    submit: PropTypes.func.isRequired
};