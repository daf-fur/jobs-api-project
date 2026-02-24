const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllJobs = async (req, res) => {
  res.send("register user");
};

const getJob = async (req, res) => {
  res.send("register user");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.send(req.body);
};

const updateJob = async (req, res) => {
  res.send("register user");
};

const deleteJob = async (req, res) => {
  res.send("register user");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
