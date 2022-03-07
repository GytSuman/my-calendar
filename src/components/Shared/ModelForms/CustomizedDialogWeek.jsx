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
import {
	TextField,
	Select,
	MenuItem,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from "@mui/material";
import moment from "moment";
import { useEvent } from '../../../context/EventContext'

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
	time,
	getEvents,
	setEvents,
}) {
	const [name, setName] = React.useState("");
	const [title, setTitle] = React.useState("");
	const [timeFrom, setTimeFrom] = React.useState(time);
	const [timeTo, setTimeTo] = React.useState(time);
	const [type, setType] = React.useState("voice");

	const event = useEvent()

	const handleClose = (event) => {
		event.stopPropagation();
		console.log("closing dialog");
		onSetOpen(false);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleTimeFromChange = (event) => {
		console.log(event.target.value)
		setTimeFrom(event.target.value);
	};

	const handleTimeToChange = (event) => {
		console.log(event.target.value)
		setTimeTo(event.target.value);
	};

	const handleTypeChange = (event) => {
		setType(event.target.value);
	};

	const handleSubmitButton = () => {
		if (type === "" || name === "" || title === "") console.log("err");
		else {
			setEvents((state) => [...state, { type, name, title, hours }]);
			onSetOpen(false);
		}
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
						label="name"
						fullWidth
						size="small"
						onChange={handleNameChange}
						value={name}
					/>
					<TextField
						label="title"
						fullWidth
						size="small"
						onChange={handleTitleChange}
						value={title}
					/>
					<TextField
						id="timeFrom"
						label="Event From"
						type="time"
						disabled
						defaultValue={timeFrom}
						value = {timeFrom}
						InputLabelProps={{
						shrink: true,
						}}
						inputProps={{
						step: 300, // 5 min
						}}
						onChange={handleTimeFromChange}
						sx={{ width: 150, m: 2 }}
					/>
					<TextField
						id="timeTo"
						label="Event To"
						type="time"
						value = {timeTo}
						InputLabelProps={{
						shrink: true,
						}}
						inputProps={{
						step: 300, // 5 min
						}}
						onChange={handleTimeToChange}
						sx={{ width: 150, m: 2 }}
					/>
					<FormControl>
						<RadioGroup
							id="type"
							name="type"
							value={type}
							onChange={handleTypeChange}
						>
							<FormControlLabel
								value="voice"
								control={<Radio />}
								label="voice"
							/>
							<FormControlLabel
								value="video"
								control={<Radio />}
								label="video"
							/>
						</RadioGroup>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleSubmitButton}>Save</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
