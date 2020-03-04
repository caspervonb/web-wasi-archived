TSC = tsc
TSFLAGS = -t esnext --baseurl lib

SRC = $(wildcard src/*/*.ts)
LIB = $(patsubst src/%.ts, lib/%.js, $(SRC))

all: $(LIB)

lib/%.js: src/%.ts
	$(TSC) --outdir $(@D) $(TSFLAGS) $<

test/%.js: test/%.ts
	$(TSC) $(TSFLAGS) $<

clean:
	$(RM) $(LIB)

.PHONY: clean