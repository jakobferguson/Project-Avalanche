CREATE DATABASE workoutdb;

CREATE TABLE Users (
    userID TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    pw TEXT NOT NULL,
    u_weight INTEGER,
    g_weight INTEGER,
    g_macros INTEGER
);

CREATE TABLE Eqp (
    eqp_name TEXT PRIMARY KEY
);

CREATE TABLE Eqp_Owned (
    eqp_name TEXT,
    userID TEXT,
    FOREIGN KEY (eqp_name) REFERENCES Eqp(eqp_name),
    FOREIGN KEY (userID) REFERENCES Users(userID)
);

CREATE TABLE Exercise (
    exc_name TEXT PRIMARY KEY,
    instruction TEXT,
    exc_type TEXT NOT NULL,
    eqp_name TEXT,
    FOREIGN KEY (eqp_name) REFERENCES Eqp(eqp_name)
);

CREATE TABLE Muscles_Used (
    muscle TEXT PRIMARY KEY,
    exc_name TEXT,
    FOREIGN KEY (exc_name) REFERENCES Exercise(exc_name)
);

CREATE TABLE Workout (
    wid INTEGER PRIMARY KEY,
    w_name TEXT,
    w_type TEXT,
    modifiable INTEGER,
    userID TEXT,
    FOREIGN KEY (userID) REFERENCES Users(userID)
);

CREATE TABLE Exc_included (
    wid INTEGER,
    exc_name TEXT,
    exc_sets INTEGER NOT NULL,
    exc_reps INTEGER NOT NULL,
    FOREIGN KEY (wid) REFERENCES Workout(wid),
    FOREIGN KEY (exc_name) REFERENCES Exercise(exc_name)
);

CREATE TABLE Health_Log (
    I_timestamp TEXT PRIMARY KEY,
    userID TEXT,
    I_weight INTEGER NOT NULL,
    FOREIGN KEY (userID) REFERENCES Users(userID)
);

CREATE TABLE Lifting_Log (
    I_timestamp TEXT PRIMARY KEY,
    userID TEXT,
    exc_name TEXT,
    lift_weight INTEGER NOT NULL,
    lift_sets INTEGER NOT NULL,
    lift_reps INTEGER NOT NULL,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (exc_name) REFERENCES Exercise(exc_name)
);