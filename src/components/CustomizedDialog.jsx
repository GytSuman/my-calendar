import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, TextField } from "@mui/material";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import moment from "moment";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

const BootstrapDialogTitle = (props) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({
	open,
	onSetOpen,
	events,
	state,
	closeAddEventModal,
	handleAddEvent,
	handleCurrentTimeChange,
}) {
	const [name, setName] = React.useState("");

	const handleSaveButton = () => {
		handleAddEvent(name);
		setName("");
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	return (
		<div style={{ zIndex: 1000 }}>
			<BootstrapDialog
				onClose={closeAddEventModal}
				aria-labelledby="customized-dialog-title"
				open={state?.showAddEventModal}
			>
				<BootstrapDialogTitle
					id="customized-dialog-title"
					onClose={closeAddEventModal}
				>
					Event
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<TextField
						fullWidth
						size="small"
						onChange={handleNameChange}
						value={name}
					/>
					<Grid container sx={{ m: 2 }}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DateTimePicker
								renderInput={(props) => <TextField {...props} />}
								label="DateTimePicker"
								value={moment(state?.eventStart)}
								onChange={handleCurrentTimeChange}
								defaultValue={moment(state?.eventStart)}
								sx={{ m: 1 }}
							/>
							<DateTimePicker
								renderInput={(props) => <TextField {...props} />}
								label="DateTimePicker"
								value={moment(state?.eventEnd)}
								onChange={handleCurrentTimeChange}
								defaultValue={moment(state?.eventEnd)}
								sx={{ m: 1 }}
							/>
						</LocalizationProvider>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSaveButton}>Save</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
