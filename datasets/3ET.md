---
{
    "name": "3ET",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "V2E"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Eye Tracking",
        "Gaze Tracking"
    ],
    "description": "Pupil tracking for AR/VR applications",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1HeOS5YBLruzHjwMKyBQfVTc_mJbsy_R1?usp=sharing",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 3.7,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "3ET: Efficient Event-based Eye Tracking using a Change-Based ConvLSTM Network",
        "doi": "10.1109/BioCAS58349.2023.10389062",
        "authors": [
            "Qinyu Chen",
            "Zuowen Wang",
            "Shih-Chii Liu",
            "Chang Gao"
        ],
        "abstract": "This paper presents a sparse Change-Based Convolutional Long Short-Term Memory (CB-ConvLSTM) model for event-based eye tracking, key for next-generation wearable healthcare technology such as AR/VR headsets. We leverage the benefits of retina-inspired event cameras, namely their low-latency response and sparse output event stream, over traditional frame-based cameras. Our CB-ConvLSTM architecture efficiently extracts spatio-temporal features for pupil tracking from the event stream, outperforming conventional CNN structures. Utilizing a delta-encoded recurrent path enhancing activation sparsity, CB-ConvLSTM reduces arithmetic operations by approximately 4.7\u00d7 without losing accuracy when tested on a v2e-generated event dataset of labeled pupils. This increase in efficiency makes it ideal for real-time eye tracking in resource-constrained devices. The project code and dataset are openly available at https://github.com/qinche106/cb-convlstm-eyetracking.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 19,
            "updated": "2025-07-01T08:11:37.873966"
        },
        {
            "source": "scholar",
            "count": 38,
            "updated": "2025-07-01T08:11:37.543299"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2308.11771"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10389062"
        },
        {
            "type": "github_page",
            "url": "https://github.com/qinche106/cb-convlstm-eyetracking"
        }
    ],
    "full_name": "Efficient Event-based Eye Tracking (3ET)",
    "additional_metadata": {
        "source_dataset": "Labeled Pupils in the Wild (LPW)",
        "source_frame_rate": "95 kHz",
        "simulator": "v2e",
        "deltaT": "4.4 ms",
        "v2e_method": "constant time-bin count representation",
        "sensor_resolution": "240x180",
        "resolution": "80\u00d760",
        "file_format": "h5 files",
        "num_subjects": "22",
        "size_uncompressed": "3.7 Gb",
        "size_compressed": "3.7 Gb",
        "event_format": "(t, x, y, p)",
        "polarity_range": "(0, 1)",
        "time_resolution": "us",
        "stereo": false
    },
    "bibtex": {
        "pages": "1--5",
        "year": 2023,
        "month": "oct",
        "author": "Chen, Qinyu and Wang, Zuowen and Liu, Shih-Chii and Gao, Chang",
        "publisher": "IEEE",
        "booktitle": "2023 {IEEE} {Biomedical} {Circuits} and {Systems} {Conference} ({BioCAS})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/BioCAS58349.2023.10389062",
        "url": "https://ieeexplore.ieee.org/document/10389062/",
        "shorttitle": "{3ET}",
        "isbn": "9798350300260",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "{3ET}: {Efficient} {Event}-based {Eye} {Tracking} using a {Change}-{Based} {ConvLSTM} {Network}",
        "address": "Toronto, ON, Canada",
        "type": "inproceedings",
        "key": "chen_3et_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TVCG.2023.3247058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISMAR52148.2021.00053",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fneur.2017.00592",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3304109.3325818",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVCG.2021.3067784",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2857491.2857520",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58529-7_3",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3314111.3319914",
            "source": "crossref"
        },
        {
            "doi": "10.1109/THMS.2020.3035176",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.neunet.2021.03.019",
            "source": "crossref"
        },
        {
            "doi": "10.1109/VR51125.2022.00059",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP46576.2022.9897432",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_25",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2022.3180209",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TVLSI.2020.2976454",
            "source": "crossref"
        },
        {
            "title": "Convolutional LSTM network: A machine learning approach for precipitation nowcasting",
            "source": "crossref"
        },
        {
            "title": "Delta networks for optimized recurrent network computation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

The dataset is provided in two separate downloads. The [first download link](https://drive.google.com/drive/folders/16qH_wv_oVNysJARtHIUrIXbHjOygfq_i?usp=sharing) contains the event frames and the labels from the original dataset. The [second download link](https://drive.google.com/drive/folders/1HeOS5YBLruzHjwMKyBQfVTc_mJbsy_R1?usp=sharing) contains the raw events (which also contain frames) and sample videos of the data. The event_frames are also stored as `h5` files, but are significantly larger than the raw event files.

The dataset is also available via \[[Tonic]\], with a dedicated [data downloader script](https://github.com/neuromorphs/tonic/blob/develop/tonic/datasets/threeET_eyetracking.py)). This script accesses a slightly different version of the dataset from a \[[Dropbox]\] link. This version contains the raw events and the labels together.

The source data comes from the Labeled Pupils in the Wild (LPW) dataset [^1]. This dataset contains 66 high-quality videos capturing the eye, with each approximately 20 seconds in duration. In this dataset, the frames were captured with a fixed frame rate of 95 kHz.

The dataset was converted using v2e by looking for changes in intensity value over a time interval 4.4 ms. The constant time-bin count representation is used to convert the data to events. The original 640x480 frames were converted to the 240x180 of the DAVIS240C. This was then reduced to 80×60 to speed up training time.

The raw data are stored as h5 files. Sample videos of the event-based output are provided.

### Dataset Structure

The final dataset contains [22] subjects.
The uncompressed size of the dataset is 3.7 Gb
The compressed size (`.zip`) of the dataset is 3.7 Gb

Each raw event file is an `h5` data file that contains the following datasets:

- **events**: The source events stored as(t, x, y, p), with (0, 1) and `t` has a us.
- **frame**: The frames are stored in an `(n x 180 x 240)` dataset, with each value being a `uint8`.
- **frame_idx**: Most likely the index of the event that matched the start of each frame.
- **frame_ts**: Most likely the timestamp that corresponds to the start of each frame.

### References:

\[^1\]: M. Tonsen, X. Zhang, Y. Sugano, and A. Bulling, “Labeled pupils in the wild: A dataset for studying pupil detection in unconstrained environments,” in Proc. ACM International Symposium on Eye Tracking Research and Applications (ETRA), 2016, pp. 139–142.

## Datasets Referenced in this Paper

\[[EBVEYE]\]
\[[N-HELEN]\]
