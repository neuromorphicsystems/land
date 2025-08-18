---
{
    "name": "EC Dataset",
    "aliases": [],
    "year": 2018,
    "modality": [
        "Audio",
        "Vision"
    ],
    "sensors": [
        "ATIS"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Voice Activity\u00a0",
        "Lip-reading"
    ],
    "task": "Voice Activity Detection",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "Energy and Computation Efficient Audio-Visual Voice Activity Detection Driven by Event-Cameras",
        "doi": "10.1109/FG.2018.00055",
        "authors": [
            "Arman Savran",
            "Raffaele Tavarone",
            "Bertrand Higy",
            "Leonardo Badino",
            "Chiara Bartolozzi"
        ],
        "abstract": "We propose a novel method for computationally efficient audio-visual voice activity detection (VAD) where visual temporal information is provided by an energy efficient event-camera (EC). Unlike conventional cameras, ECs perform on-chip low-power pixel-level change detection, adapting the sampling frequency to the dynamics of the activity in the visual scene and removing redundancy, hence enabling energy and computational efficiency. In our VAD pipeline, first, lip activity is located and detected jointly by a probabilistic estimation after spatio-temporal filtering. Then, over the lips, a feather-weight speech-related lip motion detection is performed with minimum false negative rate to activate a highly accurate but expensive acoustic deep neural networks-based VAD. Our experiments show that ECs are accurate at detecting and locating lip activity; and EC-driven VAD can result in considerable savings in computations as well as can substantially reduce false positive rates in low acoustic signal-to-noise ratio conditions.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 9,
            "updated": "2025-07-07T09:14:07.158025"
        },
        {
            "source": "scholar",
            "count": 22,
            "updated": "2025-07-07T09:14:06.853031"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8373848"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "TIMIT",
        "num_subjects": "18",
        "num_males": "9",
        "num_females": "9",
        "num_recordings": "360",
        "total_duration": "28 min",
        "stereo": false
    },
    "bibtex": {
        "pages": "333--340",
        "year": 2018,
        "month": "may",
        "author": "Savran, Arman and Tavarone, Raffaele and Higy, Bertrand and Badino, Leonardo and Bartolozzi, Chiara",
        "publisher": "IEEE",
        "booktitle": "2018 13th {IEEE} {International} {Conference} on {Automatic} {Face} \\& {Gesture} {Recognition} ({FG} 2018)",
        "urldate": "2024-08-16",
        "language": "en",
        "doi": "10.1109/FG.2018.00055",
        "url": "https://ieeexplore.ieee.org/document/8373848/",
        "isbn": "978-1-5386-2335-0",
        "title": "Energy and {Computation} {Efficient} {Audio}-{Visual} {Voice} {Activity} {Detection} {Driven} by {Event}-{Cameras}",
        "address": "Xi'an",
        "type": "inproceedings",
        "key": "savran_energy_2018"
    },
    "referenced_papers": [
        {
            "doi": "10.21437/Interspeech.2010-774",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASLP.2015.2405481",
            "source": "crossref"
        },
        {
            "doi": "10.21437/Interspeech.2016-136",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.csl.2015.11.003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2016.2535357",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00422-007-0182-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.sigpro.2017.07.006",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10994-009-5152-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1371/journal.pcbi.1000436",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICSEE.2016.7806124",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2444776.2444781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/97.736233",
            "source": "crossref"
        },
        {
            "doi": "10.1017/CBO9781107326279",
            "source": "crossref"
        },
        {
            "title": "The qut-noise-timit corpus for the evaluation of voice activity detection algorithms",
            "source": "crossref"
        },
        {
            "title": "Complete-linkage clustering for voice activity detection in audio and visual speech",
            "source": "crossref"
        },
        {
            "title": "Disitilling the knowledge in a neural network",
            "source": "crossref"
        },
        {
            "title": "Adaptive Temporal Pooling for Object Detection using Dynamic Vision Sensor",
            "source": "crossref"
        },
        {
            "title": "A deep architecture for audiovisual voice activity detection in the presence of transients",
            "source": "crossref"
        },
        {
            "title": "Using audio-visual features for robust voice activity detection in clean and noisy speech",
            "source": "crossref"
        },
        {
            "title": "Voice Activity Detection based on Fusion of Audio and Visual Information",
            "source": "crossref"
        }
    ]
}
---

### Dataset Description

We collected an audio-visual speech dataset using the “ATIS” (304×240 pixels resolution) Event Camera for the visual signal, and a high quality directional microphone at 44.1 kHz for the auditory signal. The dataset was collected in a lab environment with standard room illumination and using 8 mm lens to video-record subjects standing 70 cm away from microphone and EC. The dataset consists of 18 subjects (9 males and 9 females) with different variations among eye-glasses, beard, mustaches and head poses (e.g. with the head slightly rotated to one-side). Subjects were free to slightly move their head while speaking. A unique set of 20 utterances were selected from the TIMIT  speech corpus for each subject. There are 5 sentences in common between only one pair of subjects. In total there are 360 audio-visual clips for a total duration of 28 minutes. We also collected non-speech facial actions from all the subjects, including free head rotations, lip-biting, lip-snap, breathing with open mouth, smiling and occlusions of face and lips due to hand gestures. Finally, we collected event streams corresponding to arbitrary motions of the EC — without subjects — to evaluate visual gating false positives in presence of typical hand-held devices handling.

For accurate synchronization of visual and auditory signals' we manually triggered an audio-visual signal — a LED light and a buzzer — for each session, and manually marked the audio-visual signals to re-align possible time-shifts. For the ground-truth end points, speech segments were manually marked on the audio waveforms. There are silence sections at the beginning and ending parts of each clip. The overall voice percentage on the speech corpus is about 64%.

In order to test performance in different background noise conditions, the audio clips were mixed with recordings of subway, cafeteria, square backgrounds [1], at seven levels of SNR ratio from 15dB to −15dB with 5dB decrements. For each clean audio clip, we thus obtained 21 noisy clips.

### Dataset Structure

The dataset consists of 18, with 9 and 9. The dataset contains 360 with a total duration of 28 min.
