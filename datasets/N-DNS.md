---
{
    "name": "N-DNS",
    "aliases": [],
    "year": 2023,
    "modalities": [
        "Spike",
        "Audio"
    ],
    "sensors": [
        "Custom Simulator"
    ],
    "other_sensors": [],
    "category": "Other Modalities",
    "tags": [
        "De-noising"
    ],
    "description": "Applications of SNNs to Audio Signals",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": false,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [
            "Other"
        ],
        "availability_comment": "Code to create the datasets is included in the Github repository",
        "dataset_links": []
    },
    "paper": {
        "title": "The Intel neuromorphic DNS challenge",
        "doi": "10.1088/2634-4386/ace737",
        "authors": [
            "Jonathan Timcheck",
            "Sumit Bam Shrestha",
            "Daniel Ben Dayan Rubin",
            "Adam Kupryjanow",
            "Garrick Orchard",
            "Lukasz Pindor",
            "Timothy Shea",
            "Mike Davies"
        ],
        "abstract": "A critical enabler for progress in neuromorphic computing research is the ability to transparently evaluate different neuromorphic solutions on important tasks and to compare them to state-of-the-art conventional solutions. The Intel Neuromorphic Deep Noise Suppression Challenge (Intel N-DNS Challenge), inspired by the Microsoft DNS Challenge, tackles a ubiquitous and commercially relevant task: real-time audio denoising. Audio denoising is likely to reap the benefits of neuromorphic computing due to its low-bandwidth, temporal nature and its relevance for low-power devices. The Intel N-DNS Challenge consists of two tracks: a simulation-based algorithmic track to encourage algorithmic innovation, and a neuromorphic hardware (Loihi 2) track to rigorously evaluate solutions. For both tracks, we specify an evaluation methodology based on energy, latency, and resource consumption in addition to output audio quality. We make the Intel N-DNS Challenge dataset scripts and evaluation code freely accessible, encourage community participation with monetary prizes, and release a neuromorphic baseline solution which shows promising audio quality, high power efficiency, and low resource consumption when compared to Microsoft NsNet2 and a proprietary Intel denoising model used in production. We hope the Intel N-DNS Challenge will hasten innovation in neuromorphic algorithms research, especially in the area of training tools and methods for real-time signal processing. We expect the winners of the challenge will demonstrate that for problems like audio denoising, significant gains in power and resources can be realized on neuromorphic devices available today compared to conventional state-of-the-art solutions.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 19,
            "updated": "2025-06-23T12:20:02.440379"
        },
        {
            "source": "scholar",
            "count": 35,
            "updated": "2025-06-23T12:20:01.527564"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2303.09503"
        },
        {
            "type": "paper",
            "url": "https://iopscience.iop.org/article/10.1088/2634-4386/ace737/meta"
        },
        {
            "type": "github_page",
            "url": "https://github.com/IntelLabs/IntelNeuromorphicDNSChallenge#dataset"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "source_dataset": "Microsoft DNS Challenge",
        "stereo": false
    },
    "bibtex": {
        "pages": "034005",
        "year": 2023,
        "month": "sep",
        "author": "Timcheck, Jonathan and Shrestha, Sumit Bam and Ben Dayan Rubin, Daniel and Kupryjanow, Adam and Orchard, Garrick and Pindor, Lukasz and Shea, Timothy and Davies, Mike",
        "journal": "Neuromorphic Computing and Engineering",
        "urldate": "2024-04-13",
        "number": "3",
        "language": "en",
        "doi": "10.1088/2634-4386/ace737",
        "url": "https://iopscience.iop.org/article/10.1088/2634-4386/ace737",
        "issn": "2634-4386",
        "volume": "3",
        "title": "The {Intel} neuromorphic {DNS} challenge",
        "type": "article",
        "key": "timcheck_intel_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/JPROC.2021.3067593",
            "source": "crossref"
        },
        {
            "doi": "10.1109/5.726791",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00374",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s42256-019-0097-1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2020.3044364",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00437",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2004.383",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2021.608567",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2022.951164",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2020.00637",
            "source": "crossref"
        },
        {
            "doi": "10.21437/Interspeech.2020-3038",
            "source": "crossref"
        },
        {
            "doi": "10.21437/Interspeech.2021-1609",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASSP.1979.1163209",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASSP.1984.1164453",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASL.2010.2052251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICASSP.2018.8462417",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASLP.2019.2915167",
            "source": "crossref"
        },
        {
            "doi": "10.21437/Interspeech.2020-2537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASLP.2020.3013118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSTSP.2022.3200911",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-021-04362-w",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s43588-021-00184-y",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-022-04992-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2018.2881432",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TBCAS.2018.2880425",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2015.00141",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCAD.2015.2474396",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MM.2018.112130359",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41586-019-1424-8",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2304638",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s41467-021-26022-3",
            "source": "crossref"
        },
        {
            "doi": "10.1073/pnas.1012656107",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0375-9601(84)90371-2",
            "source": "crossref"
        },
        {
            "doi": "10.1038/srep02676",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00023",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3546790.3546803",
            "source": "crossref"
        },
        {
            "doi": "10.1103/PhysRevLett.90.058101",
            "source": "crossref"
        },
        {
            "doi": "10.1152/jn.00437.2010",
            "source": "crossref"
        },
        {
            "doi": "10.1121/1.4837815",
            "source": "crossref"
        },
        {
            "doi": "10.1523/JNEUROSCI.23-21-07940.2003",
            "source": "crossref"
        },
        {
            "doi": "10.1162/0899766052530839",
            "source": "crossref"
        },
        {
            "doi": "10.21437/Interspeech.2019-3181",
            "source": "crossref"
        },
        {
            "doi": "10.1186/s13636-015-0054-9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TASL.2011.2114881",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2931595",
            "source": "crossref"
        },
        {
            "title": "Advancing neuromorphic computing with Loihi: a survey of results and outlook",
            "source": "crossref"
        },
        {
            "title": "Gradient-based learning applied to document recognition",
            "source": "crossref"
        },
        {
            "title": "Learning multiple layers of features from tiny images",
            "source": "crossref"
        },
        {
            "title": "ImageNet: a large-scale hierarchical image database",
            "source": "crossref"
        },
        {
            "title": "Benchmarking neuromorphic vision: lessons learnt from computer vision",
            "source": "crossref"
        },
        {
            "title": "Benchmarks for progress in neuromorphic computing",
            "source": "crossref"
        },
        {
            "title": "The Heidelberg spiking data sets for the systematic evaluation of spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Converting static image datasets to spiking neuromorphic datasets using saccades",
            "source": "crossref"
        },
        {
            "title": "Learning generative visual models from few training examples: an incremental bayesian approach tested on 101 object categories",
            "source": "crossref"
        },
        {
            "title": "Is neuromorphic MNIST neuromorphic? analyzing the discriminative power of neuromorphic datasets in the time domain",
            "source": "crossref"
        },
        {
            "title": "A low power, fully event-based gesture recognition system",
            "source": "crossref"
        },
        {
            "title": "Temporal-wise attention spiking neural networks for event streams classification",
            "source": "crossref"
        },
        {
            "title": "Braille letter reading: a benchmark for spatio-temporal pattern recognition on neuromorphic hardware",
            "source": "crossref"
        },
        {
            "title": "Hand-gesture recognition based on EMG and event-based camera sensor fusion: a benchmark in neuromorphic computing",
            "source": "crossref"
        },
        {
            "title": "The INTERSPEECH 2020 deep noise suppression challenge: datasets, subjective testing framework, and challenge results",
            "source": "crossref"
        },
        {
            "title": "ICASSP 2021 deep noise suppression challenge",
            "source": "crossref"
        },
        {
            "title": "INTERSPEECH 2021 deep noise suppression challenge",
            "source": "crossref"
        },
        {
            "title": "ICASSP 2022 deep noise suppression challenge",
            "source": "crossref"
        },
        {
            "title": "Suppression of acoustic noise in speech using spectral subtraction",
            "source": "crossref"
        },
        {
            "title": "Speech enhancement using a minimum-mean square error short-time spectral amplitude estimator",
            "source": "crossref"
        },
        {
            "title": "Robust MVDR beamforming using time-frequency masks for online/offline ASR in noise",
            "source": "crossref"
        },
        {
            "title": "Speech dereverberation based on variance-normalized delayed linear prediction",
            "source": "crossref"
        },
        {
            "title": "A wavenet for speech denoising",
            "source": "crossref"
        },
        {
            "title": "Conv-TasNet: surpassing ideal time\u2013frequency magnitude masking for speech separation",
            "source": "crossref"
        },
        {
            "title": "DCCRN: deep complex convolution recurrent network for phase-aware speech enhancement",
            "source": "crossref"
        },
        {
            "title": "Deep neural network techniques for monaural speech enhancement: state of the art analysis",
            "source": "crossref"
        },
        {
            "title": "Jointly optimal denoising, dereverberation and source separation",
            "source": "crossref"
        },
        {
            "title": "Monaural speech enhancement with complex convolutional block attention module and joint time frequency losses",
            "source": "crossref"
        },
        {
            "title": "Exploring the best loss function for DNN-based low-latency speech enhancement with temporal convolutional networks",
            "source": "crossref"
        },
        {
            "title": "PHASEN: A phase-and-harmonics-aware speech enhancement network",
            "source": "crossref"
        },
        {
            "title": "SuDo RM-RF: Efficient networks for universal audio source separation",
            "source": "crossref"
        },
        {
            "title": "Data augmentation and loss normalization for deep noise suppression",
            "source": "crossref"
        },
        {
            "title": "Real-time monaural speech enhancement with short-time discrete cosine transform",
            "source": "crossref"
        },
        {
            "title": "Task splitting for DNN-based acoustic echo and noise removal",
            "source": "crossref"
        },
        {
            "title": "A consolidated view of loss functions for supervised deep learning-based speech enhancement",
            "source": "crossref"
        },
        {
            "title": "Remixit: continual self-training of speech enhancement models via bootstrapped remixing",
            "source": "crossref"
        },
        {
            "title": "AI speech enhancement for hearing aids",
            "source": "crossref"
        },
        {
            "title": "Brain-inspired computing needs a master plan",
            "source": "crossref"
        },
        {
            "title": "Opportunities for neuromorphic computing algorithms and applications",
            "source": "crossref"
        },
        {
            "title": "A compute-in-memory chip based on resistive random-access memory",
            "source": "crossref"
        },
        {
            "title": "Braindrop: a mixed-signal neuromorphic architecture with a dynamical systems-based programming model",
            "source": "crossref"
        },
        {
            "title": "A 0.086-mm2 12.7-pJ/SOP 64k-synapse 256-neuron online-learning digital spiking neuromorphic processor in 28-nm CMOS",
            "source": "crossref"
        },
        {
            "title": "Accelerated analog neuromorphic computing",
            "source": "crossref"
        },
        {
            "title": "A reconfigurable on-line learning spiking neuromorphic processor comprising 256 neurons and 128k synapses",
            "source": "crossref"
        },
        {
            "title": "TrueNorth: design and tool flow of a 65 mW 1 million neuron programmable neurosynaptic chip",
            "source": "crossref"
        },
        {
            "title": "Loihi: a neuromorphic manycore processor with on-chip learning",
            "source": "crossref"
        },
        {
            "title": "Towards artificial general intelligence with hybrid Tianjic chip architecture",
            "source": "crossref"
        },
        {
            "title": "The SpiNNaker project",
            "source": "crossref"
        },
        {
            "title": "Technology Brief Intel Labs\u2019 Loihi 2 neuromorphic research chip and the Lava software framework",
            "source": "crossref"
        },
        {
            "title": "Efficient neuromorphic signal processing with Loihi 2",
            "source": "crossref"
        },
        {
            "title": "Neural heterogeneity promotes robust learning",
            "source": "crossref"
        },
        {
            "title": "Millisecond encoding precision of auditory cortex neurons",
            "source": "crossref"
        },
        {
            "title": "Quantum limits to oscillator stability: theory and experiments on acoustic emissions from the human ear",
            "source": "crossref"
        },
        {
            "title": "Pitch sensation involves stochastic resonance",
            "source": "crossref"
        },
        {
            "title": "Feature representations for neuromorphic audio spike streams",
            "source": "crossref"
        },
        {
            "title": "Efficient spike encoding algorithms for neuromorphic speech recognition",
            "source": "crossref"
        },
        {
            "title": "A wave traveling over a hopf instability shapes the cochlear tuning curve",
            "source": "crossref"
        },
        {
            "title": "A critique of the critical cochlea: Hopf\u2014a bifurcation\u2014is better than none",
            "source": "crossref"
        },
        {
            "title": "Updated parameters and expanded simulation options for a model of the auditory periphery",
            "source": "crossref"
        },
        {
            "title": "Binary spiking in auditory cortex",
            "source": "crossref"
        },
        {
            "title": "Efficient coding of time-relative structure using spikes",
            "source": "crossref"
        },
        {
            "title": "Benchmarking keyword spotting efficiency on neuromorphic hardware",
            "source": "crossref"
        },
        {
            "title": "Effective and efficient computation with multiple-timescale spiking recurrent neural networks",
            "source": "crossref"
        },
        {
            "title": "Spikemax: spike-based loss methods for classification",
            "source": "crossref"
        },
        {
            "title": "A comprehensive study of speech separation: spectrogram vs waveform separation",
            "source": "crossref"
        },
        {
            "title": "SDR\u2013half-baked or well done?",
            "source": "crossref"
        },
        {
            "title": "DNSMOS P. 835: a non-intrusive perceptual objective speech quality metric to evaluate noise suppressors",
            "source": "crossref"
        },
        {
            "title": "Perceptual evaluation of speech quality (PESQ)-a new method for speech quality assessment of telephone networks and codecs",
            "source": "crossref"
        },
        {
            "title": "Perceptual objective listening quality assessment (POLQA), the third generation itu-t standard for end-to-end speech quality measurement part II\u2014perceptual model",
            "source": "crossref"
        },
        {
            "title": "ViSQOL: an objective speech quality model",
            "source": "crossref"
        },
        {
            "title": "An algorithm for intelligibility prediction of time\u2013frequency weighted noisy speech",
            "source": "crossref"
        },
        {
            "title": "Sigma delta quantized networks",
            "source": "crossref"
        },
        {
            "title": "SLAYER: spike layer error reassignment in time",
            "source": "crossref"
        },
        {
            "title": "Surrogate gradient learning in spiking neural networks: bringing the power of gradient-based optimization to spiking neural networks",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Based on the Microsoft DNS Challenge
- Github repository contains code to convert the audio to spikes
