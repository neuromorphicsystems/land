---
{
    "name": "N-MNIST",
    "aliases": [
        "NMNIST",
        "Neuromorphic MNIST"
    ],
    "full_name": "Neuromorphic MNIST",
    "year": 2015,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ATIS"
    ],
    "other_sensors": [],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Classification",
        "Monitor Conversion"
    ],
    "description": "Character and Object Recognition",
    "paper": {
        "title": "Converting Static Image Datasets to Spiking Neuromorphic Datasets Using Saccades",
        "doi": "10.3389/fnins.2015.00437",
        "authors": [
            "Garrick Orchard",
            "Ajinkya Jayawant",
            "Gregory Cohen",
            "Nitish Thakor"
        ],
        "abstract": "Creating datasets for Neuromorphic Vision is a challenging task. A lack of available recordings from Neuromorphic Vision sensors means that data must typically be recorded speci\ufb01cally for dataset creation rather than collecting and labeling existing data. The task is further complicated by a desire to simultaneously provide traditional frame-based recordings to allow for direct comparison with traditional Computer Vision algorithms. Here we propose a method for converting existing Computer Vision static image datasets into Neuromorphic Vision datasets using an actuated pan-tilt camera platform. Moving the sensor rather than the scene or image is a more biologically realistic approach to sensing and eliminates timing artifacts introduced by monitor updates when simulating motion on a computer monitor. We present conversion of two popular image datasets (MNIST and Caltech101) which have played important roles in the development of Computer Vision, and we provide performance metrics on these datasets using spike-based recognition algorithms. This work contributes datasets for future use in the \ufb01eld, as well as results from spike-based algorithms against which future works can compare. Furthermore, by converting datasets already popular in Computer Vision, we enable more direct comparison with frame-based approaches.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 423,
            "updated": "2024-10-26 12:53:25.307133"
        }
    ],
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": true,
        "distribution_methods": [
            "Dropbox"
        ],
        "file_formats": [
            "Binary File"
        ],
        "availability_comment": "Available across multiple online sharing platforms.",
        "size_gb": 1.1,
        "size_type": "Compressed",
        "dataset_links": [
            {
                "name": "Mendeley Data",
                "url": "https://data.mendeley.com/datasets/468j46mzdv/1",
                "format": "Binary",
                "doi": "10.17632/468j46mzdv.1",
                "available": true,
                "comment": "Preferred source for the dataset."
            },
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/16PYo5Jo3VlFC6-Lvw4c2hB-EAEf_egTL",
                "format": "Binary",
                "available": true
            },
            {
                "name": "Dropbox",
                "url": "https://www.dropbox.com/scl/fo/essikchxlxcqyx9dab5ed/AFS2ocTOzK2GJinP-4krJ7w?rlkey=swvhmpuetmlgfe7q7nst6ol39&e=1&dl=0",
                "format": "Binary",
                "available": true
            },
            {
                "name": "OneDrive",
                "url": "https://onedrive.live.com/?authkey=%21ADZrfnxBRCEFwEo&id=E6FE5BAD352FF5EA%2129251&cid=E6FE5BAD352FF5EA",
                "format": "Binary",
                "available": true
            }
        ]
    },
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1507.07629"
        },
        {
            "type": "paper",
            "url": "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2015.00437/full"
        },
        {
            "type": "project_page",
            "url": "https://www.garrickorchard.com/datasets/n-mnist"
        }
    ],
    "bibtex": {
        "key": "Orchard_2015",
        "type": "article",
        "title": "Converting Static Image Datasets to Spiking Neuromorphic Datasets Using Saccades",
        "volume": "9",
        "issn": "1662-453X",
        "url": "http://journal.frontiersin.org/Article/10.3389/fnins.2015.00437/abstract",
        "doi": "10.3389/fnins.2015.00437",
        "language": "en",
        "urldate": "2023-10-06",
        "journal": "Frontiers in Neuroscience",
        "author": "Orchard, Garrick and Jayawant, Ajinkya and Cohen, Gregory K. and Thakor, Nitish",
        "month": "nov",
        "year": 2015
    }
}
---

# Dataset Structure

The N-MNIST dataset is distributed in two separate zip files, one containing the testing set and the second containing the training set. The filenames used match those of the original recordings, allowing them to be referenced to the original dataset recordings.

Matlab code is provided alongside the files to assist in reading the dataset. The format of the data in the binary files is as follows:

Each recording is a separate binary file consisting of a list of events. Each event occupies 40 bits as described below:

- bit 39 - 32: Xaddress (in pixels)
- bit 31 - 24: Yaddress (in pixels)
- bit 23: Polarity (0 for OFF, 1 for ON)
- bit 22 - 0: Timestamp (in microseconds)

A second Matlab script is provided that creates a stablised version of the data.

Bias values for the camera are provided in the supplied `Readme.txt` file. The biases provided in that file are as follows:

| **Bias**          | **Value** |
| ----------------- | --------- |
| APSvrefL          | 3050mV    |
| APSvrefH          | 3150mV    |
| APSbiasOut        | 750mV     |
| APSbiasHyst       | 620mV     |
| CtrlbiasLP        | 620mV     |
| APSbiasTail       | 700mV     |
| CtrlbiasLBBuff    | 950mV     |
| TDbiasCas         | 2000mV    |
| CtrlbiasDelTD     | 400mV     |
| TDbiasDiffOff     | 620mV     |
| CtrlbiasSeqDelAPS | 320mV     |
| TDbiasDiffOn      | 780mV     |
| CtrlbiasDelAPS    | 350mV     |
| TDbiasInv         | 880mV     |
| biasSendReqPdY    | 850mV     |
| TDbiasFo          | 2950mV    |
| biasSendReqPdX    | 1150mV    |
| TDbiasDiff        | 700mV     |
| CtrlbiasGB        | 1050mV    |
| TDbiasBulk        | 2680mV    |
| TDbiasReqPuY      | 810mV     |
| TDbiasRefr        | 2900mV    |
| TDbiasReqPuX      | 1240mV    |
| TDbiasPR          | 3150mV    |
| APSbiasReqPuY     | 1100mV    |
| APSbiasReqPuX     | 820mV     |
