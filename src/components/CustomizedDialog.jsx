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
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

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

export default function CustomizedDialogs({ open, onSetOpen, events }) {
	const [name, setName] = React.useState("");
	const [time, setTime] = React.useState("");

	const handleClose = (event) => {
		event.stopPropagation();
		console.log("closing dialog");
		onSetOpen(false);
	};

	const handleSaveButton = (event) => {
		event.preventDefault();
		events.push({
			id: Date.now(),
			name: name,
			startTime: time,
			isClicked: true,
		});
		onSetOpen(false);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleTimeChange = (event) => {
		setTime(event.target.value);
	};

	return (
		<div style={{ zIndex: 1000 }}>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<BootstrapDialogTitle
					id="customized-dialog-title"
					onClose={handleClose}
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
					<TextField
						id="time"
						label="Alarm clock"
						type="time"
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
						sx={{ width: 150, m: 2 }}
						onChange={handleTimeChange}
						value={time}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSaveButton}>Save</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
